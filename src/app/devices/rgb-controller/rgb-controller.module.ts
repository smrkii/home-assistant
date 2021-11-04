import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { RgbControllerComponent } from './rgb-controller.component';

@NgModule({
  declarations: [
    RgbControllerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BsDropdownModule,
    FormsModule
  ],
  exports:[RgbControllerComponent]
})
export class RgbControllerModule{}
