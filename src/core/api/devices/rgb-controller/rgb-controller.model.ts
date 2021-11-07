import { LogarithmicTickOptions } from "chart.js";

export class RgbwControllerStatus{
  isok: boolean;
  data: Data;
}

export class Data{
  online: boolean;
  device_status: DeviceStatus;
}

export class DeviceStatus{
  ping_check: boolean;
  getinfo: GetInfo;
  _updated: string;
  uptime: number;
  actions_stats: ActionsStats;
  lights: Light[];
  inputs: Input[];
  fs_size: number;
  mode: string;
  input: number;
  update: Update;
  ram_total: number;
  ram_free: number;
  fs_free: number;
  cloud: Cloud;
  unixtime: number;
  time: string;
  wifi_sta: WifiSta;
  has_update: boolean;
  mqtt: Mqtt;
  cfg_changed_cnt: number;
  mac: string;
  serial: number;
  meters: Meter[];
}

export class GetInfo{
  tz_info: TzInfo;
  fw_info: FwInfo;
}

export class TzInfo{
  device: string;
  fw: string;
}

export class FwInfo{
  device: string;
  fw: string;
  mode: string;
}

export class ActionsStats{
  skipped: number;
}

export class Light{
  ison: boolean;
  source: string;
  has_timer: boolean;
  timer_started: number;
  timer_duration: number;
  timer_remaining: number;
  mode: string;
  red: number;
  green: number;
  blue: number;
  white: number;
  gain: number;
  effect: number;
  power: number;
  overpower: boolean;
  brightness: number;
}

export class Input{
  input: number;
  event: string;
  event_cnt: number;
}

export class Update{
  status: string;
  has_update: boolean;
  new_version: string;
  old_version: string;
}

export class Cloud{
  enabled: boolean;
  connected: boolean;
}

export class WifiSta{
  connected: boolean;
  ssid: string;
  ip: string;
  rssi: number;
}

export class Mqtt{
  connected: boolean;
}

export class Meter{
  power: number;
  overpower: number;
  is_valid: boolean;
  timestamp: number;
  counters: number[];
  total: number;
}
