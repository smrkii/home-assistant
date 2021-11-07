import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { Shht1Component } from './shht1.component';
import { Shht1StatusComponent } from './shht1-status/shht1-status.component';

@NgModule({
  declarations: [
    Shht1Component,
    Shht1StatusComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BsDropdownModule,
    FormsModule
  ],
  exports:[Shht1Component]
})
export class Shht1Module{}
