import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit.component';
import { DevicesEditRoutnigModule } from './devices-edit-routing.module';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { AddNewModalComponent } from './add-new-modal/add-new-modal.component';
import { AddNewModalModule } from './add-new-modal/add-new-modal.module';


@NgModule({
  declarations: [
    EditComponent,
    EditModalComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DevicesEditRoutnigModule,
    AddNewModalModule
  ],
  exports:[]
})
export class DevicesEditModule{}
