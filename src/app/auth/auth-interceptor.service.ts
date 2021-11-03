import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams
} from '@angular/common/http';
import { take, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ShellyApiService } from '../shared/shelly-api.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService,
      private shellyApi: ShellyApiService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler) {


    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {

        if (!user || req.headers.has("skip")) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
           setHeaders:{
            'Authorization': 'Bearer ' + this.shellyApi.shellyUser.getValue().Token
          }
          //params: new HttpParams().set('login', user.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
