import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Device } from "../../../core/api/devices/device.model";
import { RgbwControllerStatus } from "../../../core/api/devices/rgb-controller/rgb-controller.model";
import { SwitchStatus } from "../../../core/api/devices/shelly1/shelly1.model";
import { ShellyApiService } from "../../shared/shelly-api.service";
import { RgbControllerStatusComponent } from "./rgb-controller-status/rgb-controller-status.component";

@Component({
  selector: "app-rgb-controller",
  templateUrl: "./rgb-controller.component.html",
  styleUrls: ["./rgb-controller.component.scss"],
})
export class RgbControllerComponent implements OnInit {
  @Input("deviceProps") deviceProps: Device;
  @Input("deviceStatus") deviceStatus: any;
  @ViewChild("myDiv") myDiv: ElementRef<HTMLElement>;
  @ViewChild("switch",{static: false}) switch: ElementRef;
  hideColorPicker1: boolean = false;
  hideTextInput1: boolean = true;
  color: string = "rgb(0, 0, 255)";
  format: string = "rgba";
  colorsAnimation: string = "popup";
  timer: any;
  state: string = "off";
  white: number = 0;
  gain: number = 100;
  enabled: boolean = true;
  labelledby: string[] = ["ASDAS"];
  formatter: any = function (value) {
    return "Current value: " + value;
  };
  colorPalette: Array<any> = [
    {
      preview: "rgb(0, 0, 255)",
      variants: [
        "rgb(0, 0, 255)",
        "rgb(51, 102, 255)",
        "rgb(102, 153, 255)",
        "rgb(0, 102, 255)",
      ],
    },
    {
      preview: "rgb(255, 0, 0)",
      variants: [
        "rgb(255, 0, 0)",
        "rgb(255, 51, 0)",
        "rgb(255, 102, 0)",
        "rgb(255, 80, 80)",
      ],
    },
    {
      preview: "rgb(0, 255, 0)",
      variants: ["rgb(0, 255, 0)", "rgb(102, 255, 153)", "rgb(102, 255, 102)"],
    },
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
  ];
  constructor(
    private shellyApi: ShellyApiService,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.state = this.deviceStatus.lights[0].ison === false ? 'off' : 'on';
    this.color = 'rgb(' + this.deviceStatus.lights[0].red + ',' + this.deviceStatus.lights[0].green +
    ',' + this.deviceStatus.lights[0].blue + ')'

    this.gain = this.deviceStatus.lights[0].gain;
    this.white = this.deviceStatus.lights[0].white;
  }

  ngAfterViewInit() {
    this.switch.nativeElement.checked = this.state === 'off' ? false : true
  }

  onColorChanged() {
    clearInterval(this.timer);
    this.timer = setTimeout(() => {
      var m: string[] = this.color.split("(")[1].split(")")[0].split(",");

      var red: number = +m[0].trim();
      var green: number = +m[1].trim();
      var blue: number = +m[2].trim();

      this.shellyApi
        .rgbwControllerControll(
          this.deviceProps.id,
          this.state,
          red,
          green,
          blue,
          this.white,
          this.gain
        )
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            this.toastr.error(error.message, "Toastr fun!");
          }
        );
    }, 500);
  }

  onSwitchClick(event: Event) {
    var sendStat = this.state === "off" ? "on" : "off";

    this.shellyApi
      .rgbwControllerControll(
        this.deviceProps.id,
        sendStat,
        null,
        null,
        null,
        null,
        null
      )
      .subscribe(
        (response) => {
          this.state = sendStat;
          (event.target as HTMLInputElement).checked =
            this.state === "off" ? false : true;
        },
        (error) => {
          (event.target as HTMLInputElement).checked =
            this.state === "off" ? false : true;
          this.toastr.error(error.message, "Toastr fun!");
        }
      );
  }

  openStatusModal(){
    const modal = this.modalService.open(RgbControllerStatusComponent);
    modal.componentInstance.deviceId = this.deviceProps.id
  }
}
