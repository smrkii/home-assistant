import { StringMap } from "@angular/compiler/src/compiler_facade_interface";

export class Group{
  name: string;
  devices: string[];
  image: string;
  type: string;
  position: number;
  room_id: string;
  id: number;
  modified: number
}

export class SwitchesGroup{

  constructor(private id: string, private channel: number){}


}
