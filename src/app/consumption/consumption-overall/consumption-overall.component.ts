import { Component, OnChanges, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";
import { ToastrService } from "ngx-toastr";
import { ConsumptionOverall } from "../../../core/api/consumption/consumption-overall.model";
import { ConsumptionService } from "../consumption.service";

@Component({
  selector: "app-consumption-overall",
  templateUrl: "./consumption-overall.component.html",
  styleUrls: ["./consumption-overall.component.scss"],
})
export class ConsumptionOverallComponent implements OnInit {
  interval: string = 'year'

  constructor(private consumptionService: ConsumptionService,
    private toastr: ToastrService) {}

  ngOnInit(): void { }

  setInterval(interval: string){
    this.interval = interval;
  }
}
