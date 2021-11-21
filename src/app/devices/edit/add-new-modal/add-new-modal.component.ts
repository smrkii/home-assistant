import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
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
import { ShellyApiService } from "../../../shared/shelly-api.service";

@Component({
  selector: "app-add-new-modal",
  templateUrl: "./add-new-modal.component.html",
  styleUrls: ["./add-new-modal.component.scss"],
})
export class AddNewModalComponent implements OnInit {
  @Input() deviceId: string;
  @Output() editStatus = new EventEmitter<boolean>();

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
          text: "Next",
          class: "btn btn-primary",
          event: () => {
            this.onNext();
          },
        },
      ],
    },
  };

  constructor(
    private spinner: NgxSpinnerService,
    private ngWizardService: NgWizardService,
    private shellyApi: ShellyApiService,
    private toastr: ToastrService,
  ) {}

  onNext() {
    console.log(this.ngWizardService);

    if (this.stepIndex === 0) {
      this.spinner.show();
      this.stepIndex = 1;

      this.shellyApi.testLocalDeviceConnecton().subscribe({
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





    } else if (this.stepIndex === 1) {
      console.log(this.stepIndex);
      this.stepIndex = 2;
      this.ngWizardService.next();
    } else if (this.stepIndex === 2) {
      console.log(this.stepIndex);
      this.ngWizardService.next();
    }
  }

  stopEdit() {
    this.editStatus.emit(false);
  }



  ngOnInit(): void {}

  showPreviousStep(event?: Event) {
    console.log("BEFORE NEXT");
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
