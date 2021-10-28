export class Status{
  isok: boolean;
  max_power: number;
  data: Data;
}

export class Data{
  online: boolean;
  device_status: DeviceStatus;
}

export class DeviceStatus{
  ext_sensors: any[];
  getinfo: GetInfo;
  _updated: string;
  uptime: number;
  actions_stats: ActionsStats;
  relays: Relay[];
  temperature: number;
  temperature_status: string;
  inputs: Input[];
  overtemperature: boolean;
  ext_temperature: any[];
  fs_size: number;
  update: Update;
  ram_total: number;
  ram_free: number;
  tmp: Tmp;
  fs_free: number;
  cloud: Cloud;
  unixtime: number;
  time: string;
  wifi_sta: WifiSta;
  has_update: string;
  mqtt: Mqtt;
  cfg_changed_cnt: number;
  mac: string;
  serial: number;
  meters: Meter[];
}

export class GetInfo{
  fw_info: FwInfo;
}

export class FwInfo{
  device: string;
  fw: string;
}

export class ActionsStats{
  skipped: number;
}

export class Relay{
  ison: boolean;
  has_timer: boolean;
  timer_started: number;
  timer_duration: number;
  timer_remaining: number;
  overpower: boolean;
  source: string;
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

export class Tmp{
  tC: number;
  tF: number;
  is_valid: boolean;
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

export class ChangeSwitch{
  isok: boolean;
  data: Data1;
}

export class Data1{
  device_id: string;
}
