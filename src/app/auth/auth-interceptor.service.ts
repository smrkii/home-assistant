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

        if ((!user && !this.shellyApi.shellyUser.getValue()) || req.headers.get("skip")) {
          req = req.clone({
            headers: req.headers.delete('skip')
          });
          return next.handle(req);
        }
        var modifiedReq = req.clone({
           setHeaders:{
            'Authorization': 'Bearer ' + this.shellyApi.shellyUser.getValue().Token
          }
          //params: new HttpParams().set('login', user.token)
        });
        modifiedReq = modifiedReq.clone({
          headers: modifiedReq.headers.delete('skip')
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
