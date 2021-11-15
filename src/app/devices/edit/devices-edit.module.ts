import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit.component';
import { DevicesEditRoutnigModule } from './devices-edit-routing.module';


@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DevicesEditRoutnigModule
  ],
  exports:[]
})
export class DevicesEditModule{}
