import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GroupEditComponent } from './group-edit.component';
import { GroupEditRoutnigModule } from './group-edit-routing.module';
import { GroupEditModalComponent } from './group-edit-modal/group-edit-modal.component';
import { GroupEditModalModule } from './group-edit-modal/group-edit-modal.module';


@NgModule({
  declarations: [
    GroupEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    GroupEditRoutnigModule,
    GroupEditModalModule
  ],
  exports:[]
})
export class GroupEditModule{}
