import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SwitchModule } from '../../devices/switch/switch.module';
import { Shht1Module } from '../../devices/shht1/shht1.module';
import { RgbControllerModule } from '../../devices/rgb-controller/rgb-controller.module';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    SwitchModule,
    Shht1Module,
    RgbControllerModule
  ],
  declarations: [ DashboardComponent]
})
export class DashboardModule { }
