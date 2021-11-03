export class ShellyUser{



  constructor(private lang: string,
    private token: string,
    private timezone: string){}

  getToken(){
    return this.token;
  };

  getLang(){
    return this.lang;
  }

}
