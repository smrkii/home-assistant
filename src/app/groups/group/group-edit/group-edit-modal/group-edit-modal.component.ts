import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from "@angular/core";
import {
  NgWizardConfig,
  NgWizardService,
  StepChangedArgs,
  StepValidationArgs,
  STEP_STATE,
  THEME,
} from "ng-wizard";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { of } from "rxjs";
import { ShellyApiService } from "../../../../shared/shelly-api.service";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-group-edit-modal",
  templateUrl: "./group-edit-modal.component.html",
  styleUrls: ["./group-edit-modal.component.scss"],
})
export class GroupEditModalComponent implements OnInit {
  @Input() deviceId: string;
  @Output() editStatus = new EventEmitter<boolean>();
  @ViewChild('f') form: NgForm;
  devices = {};
  selectedDevicesType: string = "SHSW-PM";

  stepIndex: number = 0;

  stepStates = {
    normal: STEP_STATE,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden,
  };

  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    toolbarSettings: {
      toolbarExtraButtons: [
        {
          text: "Finnish",
          class: "btn btn-primary",
          event: () => {
            this.onFinnish();
          },
        },
      ],
    },
  };

  constructor(
    private spinner: NgxSpinnerService,
    private ngWizardService: NgWizardService,
    private shellyApi: ShellyApiService,
    private toastr: ToastrService
  ) {
    if (localStorage.getItem("devices"))
      this.devices = JSON.parse(localStorage.getItem("devices"));
  }

  onFinnish() {
    console.log(this.form);

    this.spinner.show();

     this.shellyApi.createGroup([],"").subscribe({
        next: data => {
          console.log(data);
          this.ngWizardService.next();

          this.spinner.hide();

        },
        error: error => {


          this.toastr.error(JSON.stringify(error), 'Error');
          this.spinner.hide();
        }
    })

  }

  stopEdit() {
    this.editStatus.emit(false);
  }

  ngOnInit(): void {}

  showPreviousStep(event?: Event) {
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {}

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }
}
