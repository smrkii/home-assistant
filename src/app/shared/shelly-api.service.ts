import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Device } from "../../core/api/devices/device.model";
import { RgbwControllerStatus } from "../../core/api/devices/rgb-controller/rgb-controller.model";
import {
  ChangeSwitch,
  SwitchStatus,
} from "../../core/api/devices/shelly1/shelly1.model";
import { Shht1Status } from "../../core/api/devices/shht1/shht1.model";
import { environment } from "../../environments/environment";
import { ShellyUser } from "./shelly-user.model";

@Injectable({
  providedIn: "root",
})
export class ShellyApiService {
  shellyUser = new BehaviorSubject<ShellyUser>(null);
  constructor(private http: HttpClient) {}

  relayControll(channel: number, turn: string, deviceId: string) {
    var formData: any = new FormData();
    formData.append("channel", channel);
    formData.append("turn", turn);
    formData.append("id", deviceId);
    formData.append("auth_key", environment.shelly_auth_key);

    return this.http.post<ChangeSwitch>(
      environment.base_url + environment.endpoints[0].switch_controll,
      formData
    );
  }

  relaySetName() {
    var formData: any = new FormData();
    formData.append("name", "aaaaa");

    return this.http.post<any>("http://192.168.0.201/settings", formData);
  }

  relayStatus(deviceId: string) {
    return this.http.get<SwitchStatus>(
      environment.base_url + environment.endpoints[0].device_status,
      {
        params: new HttpParams()
          .set("auth_key", environment.shelly_auth_key)
          .set("id", deviceId),
      }
    );
  }

  shht1Status(deviceId: string) {
    return this.http.get<Shht1Status>(
      environment.base_url + environment.endpoints[0].device_status,
      {
        params: new HttpParams()
          .set("auth_key", environment.shelly_auth_key)
          .set("id", deviceId),
      }
    );
  }

  rgbwControllerStatus(deviceId: string) {
    return this.http.get<RgbwControllerStatus>(
      environment.base_url + environment.endpoints[0].device_status,
      {
        params: new HttpParams()
          .set("auth_key", environment.shelly_auth_key)
          .set("id", deviceId),
      }
    );
  }

  rgbwControllerControll(
    id: string,
    turn: string,
    red: number,
    green: number,
    blue: number,
    white: number,
    gain: number
  ) {
    var formData: any = new FormData();
    formData.append("id", id);
    formData.append("turn", turn);

    if(red !== null) formData.append("red", red);
    if(green !== null) formData.append("green", green);
    if(blue !== null) formData.append("blue", blue);
    if(white !== null) formData.append("white", white);
    if(gain !== null) formData.append("gain", gain);

    formData.append("auth_key", environment.shelly_auth_key);


    return this.http.post<ChangeSwitch>(
      environment.base_url + environment.endpoints[0].rgbw_controll,
      formData
    );
  }

  login() {
    var formData = new FormData();
    formData.append("email", "zigas112233@gmail.com");
    formData.append("password", "e59973bf8d78cca8c916a83ed799b1268367fc01");

    return this.http
      .post<any>("https://api.shelly.cloud/auth/login", formData, {
        headers: new HttpHeaders({ skip: "true" }),
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.data.lang,
            resData.data.token,
            resData.data.timezone
          );
        })
      );
  }

  private handleAuthentication(lang: string, token: string, timezone: string) {
    const shellyUser = new ShellyUser(lang, token, timezone);
    this.shellyUser.next(shellyUser);
    localStorage.setItem("shelly-userData", JSON.stringify(shellyUser));
  }

  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.message);
  }

  autoLogin() {
    const userData: {
      lang: string;
      token: string;
      timezone: string;
    } = JSON.parse(localStorage.getItem("shelly-userData"));

    if (!userData) {
      return;
    }

    const loadedUser = new ShellyUser(
      userData.lang,
      userData.token,
      userData.timezone
    );

    this.shellyUser.next(loadedUser);
  }

  getDevicesProps() {
    return this.http
      .get<any>(
        "https://shelly-29-eu.shelly.cloud/interface/device/get_all_lists"
      )
      .pipe(
        map((response) => {
          var dd: any = response;
          return dd.data.devices;
        }),
        catchError((error) => {
          return throwError(error); // From 'rxjs'
        })
      );
  }

  getDevicesStatus() {
    return this.http
      .get<any>("https://shelly-29-eu.shelly.cloud/device/all_status")
      .pipe(
        map((response) => {
          var dd: any = response;
          return dd.data.devices_status;
        }),
        catchError((error) => {
          return throwError(error); // From 'rxjs'
        })
      );
  }
}
