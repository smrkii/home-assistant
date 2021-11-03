import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Device } from "../../core/api/devices/device.model";
import { ShellyApiService } from "../shared/shelly-api.service";

@Injectable({
  providedIn: "root",
})
export class DevicesService {
  devices = new Subject<Device[]>();

  constructor(private shellyApiService: ShellyApiService) {}

  getDevices() {
    this.shellyApiService.getDevices().subscribe(
      (response) => {
        var devices: Device[];
        devices = response;
        this.devices.next(devices)
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
