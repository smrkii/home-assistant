import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';

@Component({
  selector: 'app-add-new-modal',
  templateUrl: './add-new-modal.component.html',
  styleUrls: ['./add-new-modal.component.scss']
})
export class AddNewModalComponent implements OnInit {
  @Input() deviceId: string;
  @Output() editStatus = new EventEmitter<boolean>()

  stepStates = {
    normal: STEP_STATE,
    disabled: STEP_STATE.disabled,
    error: STEP_STATE.error,
    hidden: STEP_STATE.hidden
  };




  config: NgWizardConfig = {
    selected: 0,
    theme: THEME.dots,
    toolbarSettings: {
      toolbarExtraButtons: [
        { text: 'Finnish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
      ],
    }
  };


  constructor(
    private ngWizardService: NgWizardService
   ) { }


    stopEdit(){
      this.editStatus.emit(false);
    }


  ngOnInit(): void {
  }

  showPreviousStep(event?: Event) {
    console.log('BEFORE NEXT');
    this.ngWizardService.previous();
  }

  showNextStep(event?: Event) {


  }

  resetWizard(event?: Event) {
    this.ngWizardService.reset();
  }

  setTheme(theme: THEME) {
    this.ngWizardService.theme(theme);
  }

  stepChanged(args: StepChangedArgs) {
    this.ngWizardService.previous()
    //args.step.initialStatus = STEP_STATUS.untouched;
    console.log(args.step);
  }

  isValidTypeBoolean: boolean = true;

  isValidFunctionReturnsBoolean(args: StepValidationArgs) {
    return true;
  }

  isValidFunctionReturnsObservable(args: StepValidationArgs) {
    return of(true);
  }



}
