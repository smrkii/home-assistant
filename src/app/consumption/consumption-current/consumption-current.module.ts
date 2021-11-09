import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { ConsumptionCurrentComponent } from './consumption-current.component';
import { ConsumptionCurrentRoutnigModule } from './consumption-current-routing.module';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    ConsumptionCurrentComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ConsumptionCurrentRoutnigModule,
    ChartsModule
  ],
  exports:[]
})
export class ConsumptionCurrentModule{}
