import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ConsumptionOverall } from "../../core/api/consumption/consumption-overall.model";
import { ShellyApiService } from "../shared/shelly-api.service";

@Injectable({
  providedIn: "root",
})
export class ConsumptionService {
  constructor(private shellyApiService: ShellyApiService) {}

  getOverallConsumption(interval: string){
    return this.shellyApiService.getConsumptionOverall(interval)
  }

  getDeviceConsumption(interval: string, device_id: string){
    return this.shellyApiService.getDeviceConsumption(interval,device_id);
  }
}
