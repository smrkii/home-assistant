import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchRoutingModule } from './switch.routing';
import { RouterModule } from '@angular/router';
import { SwitchComponent } from './switch.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SwitchStatusComponent } from './switch-status/switch-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SwitchComponent,
    SwitchStatusComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SwitchRoutingModule,
    BsDropdownModule,
    FormsModule
  ],
  exports:[SwitchComponent]
})
export class SwitchModule { }
