import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ChangeSwitch, SwitchStatus } from "../../core/api/devices/shelly1/shelly1.model";
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

    return this.http.post<ChangeSwitch>(environment.base_url+environment.endpoints[0].switch_controll, formData);
  }

  relaySetName() {
    var formData: any = new FormData();
    formData.append("name", "aaaaa");

    return this.http.post<any>("http://192.168.0.201/settings", formData);
  }

  relayStatus(deviceId: string) {
    return this.http.get<SwitchStatus>(environment.base_url+environment.endpoints[0].device_status,
      {
        params: new HttpParams().set('auth_key',environment.shelly_auth_key)
        .set('id',deviceId)
      });
  }

  login(){
    var formData = new FormData();
    formData.append('email','zigas112233@gmail.com');
    formData.append('password','e59973bf8d78cca8c916a83ed799b1268367fc01');

    return this.http.post<any>('https://api.shelly.cloud/auth/login',formData)
    .pipe(
      catchError(this.handleError),
      tap(resData => {


        this.handleAuthentication(
          resData.data.lang,resData.data.token,resData.data.timezone

        );
      })
    );;
  }

  private handleAuthentication(
    lang: string, token: string, timezone: string
  ) {

    const shellyUser = new ShellyUser(lang,token,timezone);
    this.shellyUser.next(shellyUser);
    localStorage.setItem('shelly-userData', JSON.stringify(shellyUser));
  }


  private handleError(errorRes: HttpErrorResponse) {
    return throwError(errorRes.message);
  }
}
