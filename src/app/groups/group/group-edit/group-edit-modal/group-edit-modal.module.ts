import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GroupEditModalComponent } from './group-edit-modal.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    GroupEditModalComponent
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
  exports:[GroupEditModalComponent]
})
export class GroupEditModalModule{}
