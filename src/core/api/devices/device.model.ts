export class Device{
  id: string;
  name: string;
  image: string;
  room_id: string;
  position: number;
  category: string;
  cloud: boolean;
  cloud_assoc: boolean;
  login: Login;
  type: string;
  channels_count: number;
  has_user_image: boolean;
  template: string;
  channel: number;
  fw: string;
  modified: number;
  exclude_event_log: boolean;
  name_sync: boolean
}

export class Login{
  enabled: boolean;
  username: string;
  password: string;
}
