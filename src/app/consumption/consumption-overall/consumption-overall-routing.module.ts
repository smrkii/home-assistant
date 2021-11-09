import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsumptionOverallComponent } from "./consumption-overall.component";


const routes: Routes = [
  {
      path: '',
      component: ConsumptionOverallComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumptionOverallRoutnigModule { }
