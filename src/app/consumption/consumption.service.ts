import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ConsumptionOverall } from "../../core/api/consumption/consumption-overall.model";
import { ShellyApiService } from "../shared/shelly-api.service";

@Injectable({
  providedIn: "root",
})
export class ConsumptionService {
  dateRange: string;
  overallConsumption= new Subject<ConsumptionOverall>();

  constructor(private shellyApiService: ShellyApiService) {}

  getOverallConsumption(dateRange: string){
    return this.shellyApiService.getConsumptionOverall(dateRange)

  }
}
