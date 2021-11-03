export class ShellyUser{


  constructor(private lang: string,
    private token: string,
    private timezone: string){}

  get Token(){
    return this.token;
  };

  get Lang(){
    return this.lang;
  }

}
