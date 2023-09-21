import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  @ViewChild('loginform') LoginForm?: NgForm;

  constructor(private apiService: ApiService, private router: Router) {}

  email: string='';
  password: string='';


  // login(){
  //   var result = this.apiService.login(
  //     {
  //       'email': this.email,
  //       'password': this.password
  //     }
  //   );
  //   result.subscribe({
  //     next: (response: any) => {
  //       if(response.status=='success'){
  //         this.router.navigateByUrl('/home')
  //       }
  //     },
  //     error:(err: HttpErrorResponse)=>{
  //       console.log(err);
  //       const {messaage}=err['error'];
  //       alert(messaage);
  //     }
  //   })

  // }

}
