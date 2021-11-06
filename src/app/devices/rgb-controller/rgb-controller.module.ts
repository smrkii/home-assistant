import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { RgbControllerComponent } from './rgb-controller.component';
import { NgxColorsModule } from 'ngx-colors';

@NgModule({
  declarations: [
    RgbControllerComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BsDropdownModule,
    FormsModule,
    NgxColorsModule
  ],
  exports:[RgbControllerComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RgbControllerModule{}
