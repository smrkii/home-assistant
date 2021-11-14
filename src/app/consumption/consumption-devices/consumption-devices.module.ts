import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ConsumptionModule } from '../consumption.module';
import { ConsumptionDevicesComponent } from './consumption-devices.component';
import { ConsumptionDevicesRoutnigModule } from './consumption-devices-routing.module';


@NgModule({
  declarations: [
    ConsumptionDevicesComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ChartsModule,
    ConsumptionModule,
    ConsumptionDevicesRoutnigModule
  ],
  exports:[]
})
export class ConsumptionDevicesModule{}
