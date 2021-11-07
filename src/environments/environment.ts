// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  shelly_auth_key: 'NzYxMmN1aWQ555C6F1FC950DDB8B24056C43449C1A8698E997DB2B7CE110D860BAD2A85A76CA2BD1CED9EF06B81',
  base_url: 'https://shelly-29-eu.shelly.cloud',
  apiKey: 'AIzaSyB-aVA25EWKMMnsYkgdi-wkwYX6-AaGqr4',
  endpoints:[
    {
      switch_controll: '/device/relay/control',
      rgbw_controll: '/device/light/control',
      device_status: '/device/status'
    }

  ],
  devices:[
    {
      id: 'E8db84d28717',
      ip: '192.168.0.201',
      type: 'Shelly 1 PM',
      channel: 0
    },
    {
      id: 'E8db84d27566',
      ip: '192.168.0.202',
      type: 'Shelly 1 PM',
      channel: 0
    }
  ]
};
