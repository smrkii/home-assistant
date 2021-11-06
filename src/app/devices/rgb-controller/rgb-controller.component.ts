import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Device } from '../../../core/api/devices/device.model';
import { SwitchStatus } from '../../../core/api/devices/shelly1/shelly1.model';

@Component({
  selector: 'app-rgb-controller',
  templateUrl: './rgb-controller.component.html',
  styleUrls: ['./rgb-controller.component.scss']
})
export class RgbControllerComponent implements OnInit {
  @Input('deviceProps') deviceProps: Device
  @Input('deviceStatus') deviceStatus: SwitchStatus
  @ViewChild('myDiv') myDiv: ElementRef<HTMLElement>;
  hideColorPicker1:boolean = false;
  hideTextInput1:boolean = true;
  color:string = '#EC407A';
  format: string = "rgba"
  colorsAnimation: string = "popup"
  timer: any;
  colorPalette:Array<any> = [
    {
      preview: '#0066ff',
      variants:['#3333ff','#66ccff','#0066cc']
    },
    '#ff0000',
    '#33cc33'
  ]
  constructor() { }

  ngOnInit(): void {
  }


  onColorChanged(event: Event){
    clearInterval(this.timer);
    this.timer = setTimeout(function() {
      console.log(event);
    }, 1000);
  }



}
