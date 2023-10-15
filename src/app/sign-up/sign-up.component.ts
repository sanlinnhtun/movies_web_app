import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPass: string = '';
  loading: boolean = false;

  signUpForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmPass: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  movieSub: Subscription = new Subscription();

  signup() {
    this.loading = true;
    var result = this.apiService.signup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      confirmPass: this.confirmPass,
    });
    this.movieSub = result.subscribe({
      next: (response: any) => {
        if (response.status == 'success') {
          this.router.navigateByUrl('home');
        }
        console.log(response);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
