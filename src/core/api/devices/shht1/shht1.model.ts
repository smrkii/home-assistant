export class Shht1Status{
  isok: boolean;
  data: Data;
}

export class Data{
  online: boolean;
  device_status: DeviceStatus;
}

export class DeviceStatus{
  getinfo: GetInfo;
  _updated: string;
  connect_retries: number;
  uptime: number;
  act_reasons: string[];
  actions_stats: ActionsStats;
  is_valid: boolean;
  fs_size: number;
  update: Update;
  ram_total: number;
  ram_free: number;
  tmp: Tmp;
  fs_free: number;
  hum: Hum;
  cloud: Cloud;
  unixtime: number;
  time: string;
  wifi_sta: WifiSta;
  cfg_changed_cnt: number;
  has_update: string;
  mqtt: Mqtt;
  bat: Bat;
  mac: string;
  serial: number;
  sleeping: boolean;
}

export class GetInfo{
  tz_info: TzInfo;
}

export class TzInfo{
  device: string;
  fw: string;
}

export class ActionsStats{
  skipped: number;
}

export class Update{
  status: string;
  has_update: boolean;
  new_version: string;
  old_version: string;
}

export class Tmp{
  value: number;
  units: string
  tC: number;
  tF: number;
  is_valid: boolean;
}

export class Hum{
  value: number;
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

export class Bat{
  value: number;
  voltage: number;
}
