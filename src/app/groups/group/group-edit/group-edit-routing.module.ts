import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupEditComponent } from "./group-edit.component";


const routes: Routes = [
  {
      path: '',
      component: GroupEditComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupEditRoutnigModule { }
