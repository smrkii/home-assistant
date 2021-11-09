import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsumptionCurrentComponent } from "./consumption-current.component";

const routes: Routes = [
  {
      path: '',
      component: ConsumptionCurrentComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumptionCurrentRoutnigModule { }
