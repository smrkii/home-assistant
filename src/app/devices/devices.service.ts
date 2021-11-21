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
    var powerOnDefaultMode: string = "";
    var buttonType: string = "";
    var temperatureUnit: string = "c";
    var temperatureTreshold: number = 0;
    var humidityTreshold: number = 0;
    var temperatureOffset: number = 0;
    var humidityOffset: number = 0;

    var onTimer: {
      active: false;
      seconds: 0;
    };

    var offTimer: {
      active: false;
      seconds: 0;
    };

    var dev = {};

    var savedDevices = JSON.parse(localStorage.getItem("devices"));

    this.shellyApiService.getDevicesProps().subscribe(
      (devicesResponse) => {
        devicesProps = devicesResponse;

        //device statuses
        this.shellyApiService.getDevicesStatus().subscribe(
          (statusResponse) => {
            devicesStatus = statusResponse;
            Object.entries(devicesProps).map(([id, props]) => {
              var status = devicesStatus[id];

              if(props.type === "SHSW-PM"){
                if(savedDevices !== null){
                  powerOnDefaultMode = savedDevices[id].powerOnDefaultMode;

                  offTimer = {
                    active: savedDevices[id].offTimer.active,
                    seconds: savedDevices[id].offTimer.seconds,
                  };

                  onTimer = {
                    active: savedDevices[id].onTimer.active,
                    seconds: savedDevices[id].onTimer.seconds,
                  };

                  onTimer = {
                    active: false,
                    seconds: 0,
                  };

                  buttonType = savedDevices[id].buttonType;
                }else{
                  powerOnDefaultMode = "last";

                  offTimer = {
                    active: false,
                    seconds: 0,
                  };

                  onTimer = {
                    active: false,
                    seconds: 0,
                  };

                  buttonType = "edge";
                }

                dev[id] = {
                  props,
                  status,
                  powerOnDefaultMode,
                  buttonType,
                  onTimer,
                  offTimer,
                };
              }else if(props.type === "SHHT-1"){
                if (savedDevices !== null) {
                  temperatureUnit = savedDevices[id].temperatureUnit;
                  temperatureTreshold = savedDevices[id].temperatureTreshold;
                  humidityTreshold = savedDevices[id].humidityTreshold;
                  temperatureOffset = savedDevices[id].temperatureOffset;
                  humidityOffset = savedDevices[id].humidityOffset;
                } else {
                  temperatureUnit = "c";
                  temperatureTreshold = 0;
                  humidityTreshold = 0;
                  temperatureOffset = 0;
                  humidityOffset = 0;
                }

                dev[id] = {
                  props,
                  status,
                  temperatureUnit,
                  temperatureTreshold,
                  humidityTreshold,
                  temperatureOffset,
                  humidityOffset,
                };

              }else if(props.type === "SHRGBW2"){

              }




            });
            this.devices.next(dev);
            localStorage.setItem("devices", JSON.stringify(dev));
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
