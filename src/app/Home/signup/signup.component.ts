import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { user } from '../../Shared/models';
import { ApiService } from '../../Shared/app.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../Shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  newUser: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {
    this.newUser = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  signUp(): void {
    if(this.newUser.invalid) {
      return;
    }

    this.apiService.addUser(this.newUser.value).subscribe(
      () => {
        this.apiService.authenticateUser(this.newUser.value).subscribe(
          (authUser: user) => {
            this.authService.setUser(authUser);
            this.router.navigate(['/companyHome']);
          },
          error => {

          }
        );
      },
      error => {

      }
    );
  }
}
