import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsumptionOverallComponent } from './consumption-overall.component';
import { ConsumptionOverallRoutnigModule } from './consumption-overall-routing.module';


@NgModule({
  declarations: [
    ConsumptionOverallComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ConsumptionOverallRoutnigModule
  ],
  exports:[]
})
export class ConsumptionOverallModule{}
