import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl: string='https://api.themoviedb.org/3/movie/';
  apiKey: string='435e44180b93a0d2c5376844bbb05fbb';

  getMovieDetails(movieid: number){
    return this.http.get(`${this.baseUrl}${movieid}?api_key=${this.apiKey}language=en-US`)
  }

  getMovies(category: any){
    return this.http.get(`${this.baseUrl}${category}?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getactordetil(movieid: number) {
    return this.http.get(`${this.baseUrl}${movieid}/credits?api_key=${this.apiKey}`)
  }

  signinUrl: string='https://msi.htoowaiyan.com/api/v1/users/signin';
  signUpUrl: string='https://msi.htoowaiyan.com/api/v1/users/signup';

  // data={
  //   "email" : "julioeleven3@gmail.com",
  //   "password" : "password" 
  // }

  options={
    headers: new HttpHeaders({
      'Accept': 'text/html,application/json',
      'Content-Type': 'application/json'
    })
  }

  signin(userdata: any) {
    return this.http.post(this.signinUrl,  userdata, this.options)
  }

  signUp(singupData: any){
    return this.http.post(this.signUpUrl,singupData, this.options)
  }

}
// https://msi.htoowaiyan.com/api/v1/users/signin
// https://api.themoviedb.org/3/movie/now_playing?api_key=435e44180b93a0d2c5376844bbb05fbb&language=en-US&page=2