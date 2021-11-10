import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConsumptionOverallComponent } from './consumption-overall.component';
import { ConsumptionOverallRoutnigModule } from './consumption-overall-routing.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ConsumptionOverallComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ConsumptionOverallRoutnigModule,
    ChartsModule
  ],
  exports:[]
})
export class ConsumptionOverallModule{}
