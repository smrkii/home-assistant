import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConsumptionDevicesComponent } from "./consumption-devices.component";


const routes: Routes = [
  {
      path: '',
      component: ConsumptionDevicesComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumptionDevicesRoutnigModule { }
