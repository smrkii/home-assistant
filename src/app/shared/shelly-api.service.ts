import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ChangeSwitch, Status } from "../../core/api/devices/shelly1/shelly1.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ShellyApiService {
  constructor(private http: HttpClient) {}

  relayControll(channel: number, turn: string, deviceId: string) {
    var formData: any = new FormData();
    formData.append("channel", channel);
    formData.append("turn", turn);
    formData.append("id", deviceId);
    formData.append("auth_key", environment.shelly_auth_key);

    return this.http.post<ChangeSwitch>(environment.base_url+environment.endpoints[0].switch_controll, formData);
  }

  relayStatus(deviceId: string) {
    return this.http.get<Status>(environment.base_url+environment.endpoints[0].device_status,
      {
        params: new HttpParams().set('auth_key',environment.shelly_auth_key)
        .set('id',deviceId)
      });
  }
}
