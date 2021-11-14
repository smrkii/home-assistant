import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ConsumptionComponent } from './consumption.component';
import { LineChartComponent } from '../shared/line-chart/line-chart.component';
import { ConsumptionDevicesComponent } from './consumption-devices/consumption-devices.component';

@NgModule({
  declarations: [
    ConsumptionComponent,
    LineChartComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ChartsModule,

  ],
  exports:[ConsumptionComponent]
})
export class ConsumptionModule{}
