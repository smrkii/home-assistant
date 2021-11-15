import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";
import { ToastrService } from "ngx-toastr";
import { ignoreElements } from "rxjs/operators";
import { ConsumptionService } from "./consumption.service";

@Component({
  selector: "app-consumption",
  templateUrl: "./consumption.component.html",
  styleUrls: ["./consumption.component.scss"],
})
export class ConsumptionComponent implements OnChanges {
  @Input() interval: string = "year";
  @Input() device_id: string = null;
  @Input() showTableData: boolean = true;
  @Input() title: string = "";
  @Input() mergeAllDevice: boolean = false;
  data: any = {};
  devices: any = {};
  lineTitle: string = '';

  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[];
  monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  constructor(
    private consumptionService: ConsumptionService,
    private toastr: ToastrService
  ) {}



  ngOnChanges(): void {
    this.lineChartData = [];
    this.devices = JSON.parse(localStorage.getItem("devices"));
    if (this.device_id !== null) {
      this.getDeviceConsumption(this.interval, this.device_id);
    }else if(this.mergeAllDevice){
      this.getMergedDevicesConsumption(this.interval);
    }
     else {
      this.getOverallConsumption(this.interval);
    }
  }



  getOverallConsumption(interval: string) {
    this.consumptionService.getOverallConsumption(interval).subscribe(
      (response) => {
        this.data = response;

        if (interval == "day") {
          this.prepareDaylyGraph();
        } else if (interval == "week") {
          this.prepareWeeklyGraph();
        } else if (interval == "month") {
          this.prepareMonthlyGraph();
        } else if (interval == "year") {
          this.prepareYearlyGraph();
        }
      },
      (error) => {
        this.toastr.error(error.message, "Toastr fun!");
      }
    );
  }

  getDeviceConsumption(interval: string, device_id: string) {
    this.consumptionService.getDeviceConsumption(interval, device_id).subscribe(
      (response) => {
        this.data = response;

        if (interval == "day") {
          this.prepareDaylyGraph();
        } else if (interval == "week") {
          this.prepareWeeklyGraph();
        } else if (interval == "month") {
          this.prepareMonthlyGraph();
        } else if (interval == "year") {
          this.prepareYearlyGraph();
        }
      },
      (error) => {
        this.toastr.error(error.message, "Toastr fun!");
      }
    );
  }

  getMergedDevicesConsumption(interval: string) {
     for (const [key, value] of Object.entries(this.devices)) {


       this.consumptionService.getDeviceConsumption(interval, this.devices[key].props.id).subscribe(
        (response) => {
          this.data = response;
          this.lineTitle = this.devices[key].props.name
          if (interval == "day") {
            this.prepareDaylyGraph();
          } else if (interval == "week") {
            this.prepareWeeklyGraph();
          } else if (interval == "month") {
            this.prepareMonthlyGraph();
          } else if (interval == "year") {
            this.prepareYearlyGraph();
          }
        },
        (error) => {
          this.toastr.error(error.message, "Toastr fun!");
        }
      );

    }
  }

  prepareYearlyGraph() {
    var data = [];
    var labels = [];

    for (var i = 0; i < this.data.data.history.length; i++) {
      var date = new Date(
        this.data.data.history[i].datetime.replace(" ", "T") + "Z"
      );
      data[i] = this.data.data.history[i].consumption;
      labels[i] = date.getFullYear() + " " + this.monthNames[date.getMonth()];
    }



    this.lineChartData[this.lineChartData.length] = {data, label:this.lineTitle};
    this.lineChartLabels = labels;

  }

  prepareMonthlyGraph() {
    var data = [];
    var labels = [];

    for (var i = 0; i < this.data.data.history.length; i++) {
      var date = new Date(
        this.data.data.history[i].datetime.replace(" ", "T") + "Z"
      );
      data[i] = this.data.data.history[i].consumption;
      console.log(date);
      labels[i] =
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }
    this.lineChartData[this.lineChartData.length] = {data, label:this.lineTitle};
    this.lineChartLabels = labels;


  }
  prepareWeeklyGraph() {
    var data = [];
    var labels = [];

    for (var i = 0; i < this.data.data.history.length; i++) {
      var date = new Date(
        this.data.data.history[i].datetime.replace(" ", "T") + "Z"
      );
      data[i] = this.data.data.history[i].consumption;
      console.log(date);
      labels[i] =
        date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
    }
    this.lineChartData[this.lineChartData.length] = {data, label:this.lineTitle};
    this.lineChartLabels = labels;

  }

  prepareDaylyGraph() {
    var data = [];
    var labels = [];

    for (var i = 0; i < this.data.data.history.length; i++) {
      labels[i] = this.data.data.history[i].datetime;
      data[i] = this.data.data.history[i].consumption;
    }
    this.lineChartData[this.lineChartData.length] = {data, label:this.lineTitle};
    this.lineChartLabels = labels;

  }
}
