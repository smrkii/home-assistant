import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  private closeSub: Subscription;
  isLoading = false;
  isError = false;
  errorMessage: string = "";

  constructor(private authService: AuthService,
    private router: Router){}

  onSubmit(form: NgForm){
    const values = form.value
    let authObs: Observable<AuthResponseData>;


    authObs = this.authService.signup(values.email, values.password);

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/login']);
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
