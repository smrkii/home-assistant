import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Device } from "../../core/api/devices/device.model";
import { ShellyApiService } from "../shared/shelly-api.service";

@Injectable({
  providedIn: "root",
})
export class DevicesService {
  devices = new Subject<Object>();

  constructor(private shellyApiService: ShellyApiService) {}

  getDevices() {
    var devicesProps: Object;
    var devicesStatus: Object;
    var dev = {};

    this.shellyApiService.getDevicesProps().subscribe(
      (devicesResponse) => {

        devicesProps = devicesResponse;

        //device statuses
        this.shellyApiService.getDevicesStatus().subscribe(
          (statusResponse) => {
            devicesStatus = statusResponse
            Object.entries(devicesProps).map(([id, props]) => {
              var status = devicesStatus[id];
              dev[id] = {props,status}
          })
            this.devices.next(dev);
            localStorage.setItem("devices", JSON.stringify(dev));
          },
          (error) => {
            console.log(error);
          }
        )



      },
      (error) => {
        console.log(error);
      }
    );


  }

}
