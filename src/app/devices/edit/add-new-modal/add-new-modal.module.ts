import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddNewModalComponent } from './add-new-modal.component';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { NgxSpinnerModule } from 'ngx-spinner';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AddNewModalComponent
  ],
  imports: [
    NgWizardModule.forRoot({
      theme: THEME.circles
    }),
    RouterModule,
    CommonModule,
    FormsModule,

    NgxSpinnerModule,
  ],
  exports:[AddNewModalComponent]
})
export class AddNewModalModule{}
