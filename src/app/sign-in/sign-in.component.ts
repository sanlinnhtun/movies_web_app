import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  movieSub: Subscription = new Subscription();

  email: string = '';
  password: string = '';
  loading: boolean = false;

  signin() {
    this.loading = true;
    var result = this.apiService.signin({
      email: this.email,
      password: this.password,
    });
    this.movieSub = result.subscribe({
      next: (response: any) => {
        if (response.status == 'success') {
          console.log(response);
          this.cookieService.set('token', response.token);
          this.router.navigateByUrl('home');
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        const { messaage } = err['error'];
        alert(messaage);
      },
    });
  }

  ngOndestory(): void {
    this.movieSub.unsubscribe;
  }
}
