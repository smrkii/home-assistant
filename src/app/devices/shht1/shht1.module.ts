import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';
import { Shht1Component } from './shht1.component';

@NgModule({
  declarations: [
    Shht1Component
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
