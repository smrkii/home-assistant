import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devices = new Subject<any[]>();

  constructor() { }

  getDevices(){

  }






}
