import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { GroupComponent } from './group.component';
import { GroupRoutingModule } from './group.routing';

@NgModule({
  declarations: [
    GroupComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BsDropdownModule,
    FormsModule,
    GroupRoutingModule
  ],
  exports:[GroupComponent]
})
export class GroupModule { }
