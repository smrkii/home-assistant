import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { RgbControllerComponent } from './rgb-controller.component';
import { NgxColorsModule } from 'ngx-colors';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { RgbControllerStatusComponent } from './rgb-controller-status/rgb-controller-status.component';

@NgModule({
  declarations: [
    RgbControllerComponent,
    RgbControllerStatusComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BsDropdownModule,
    FormsModule,
    NgxColorsModule,
    NgxBootstrapSliderModule
  ],
  exports:[RgbControllerComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RgbControllerModule{}
