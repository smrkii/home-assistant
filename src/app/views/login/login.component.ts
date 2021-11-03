import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData,AuthService} from '../../auth/auth.service'
import { ShellyApiService } from '../../shared/shelly-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  isLoading = false;
  isError = false;
  errorMessage: string = "";
  private closeSub: Subscription;

  constructor(private authService: AuthService,
    private router: Router,
    private shellyApi: ShellyApiService){}
    private firebaseLogin: boolean = false;
    private shellyLogin: boolean = false;






  onSubmit(form: NgForm){
    const values = form.value
    if (!form.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.login(values.email, values.password);

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.firebaseLogin = true;

        let authObsShelly: Observable<any>;
        authObsShelly = this.shellyApi.login();

        authObsShelly.subscribe(
          resData => {
            console.log(resData);
            this.isLoading = false;
            this.shellyLogin = true;

            if(this.firebaseLogin && this.shellyLogin){
              this.router.navigate(['/dashboard']);
            }

          },
          errorMessage => {
            console.log(errorMessage);
            this.errorMessage = errorMessage;
            this.isError = true;
            this.isLoading = false;
          }
        );




      },
      errorMessage => {
        console.log(errorMessage);
        this.errorMessage = errorMessage;
        this.isError = true;
        this.isLoading = false;
      }
    );







  }

}
