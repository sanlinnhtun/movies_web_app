import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '435e44180b93a0d2c5376844bbb05fbb';

  // home movies
  getMovies(category: string) {
    return this.http.get(
      `${this.baseUrl}/movie/${category}?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }

  // movies details
  getDetails(movieID: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${movieID}?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }

  // casts list
  getcastdetails(movieID: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${movieID}/credits?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }

  // similar movies
  getsimilarmovies(movieID: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${movieID}/similar?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }

  // movie details trailer
  gettrailer(movieID: number) {
    return this.http.get(
      `${this.baseUrl}/movie/${movieID}/videos?api_key=${this.apiKey}&language=en-US&page=1`
    );
  }

  //cast movies
  //https://api.themoviedb.org/3/person/5292/combined_credits?api_key=435e44180b93a0d2c5376844bbb05fbb&language=en-US&page=2
  getcastmovies(castID: number) {
    return this.http.get(
      `${this.baseUrl}/person/${castID}/combined_credits?api_key=${this.apiKey}&language=en-US`
    );
  }

  //cast data
  getonecast(castID: number) {
    return this.http.get(
      `${this.baseUrl}/person/${castID}?api_key=${this.apiKey}&language=en-US`
    );
  }

  signinUrl: string = 'https://msi.htoowaiyan.com/api/v1/users/signin';
  signUpUrl: string = 'https://msi.htoowaiyan.com/api/v1/users/signup';

  options = {
    headers: new HttpHeaders({
      Accept: 'text/html,application/json',
      'Content-Type': 'application/json',
    }),
  };

  signin(userdata: any) {
    return this.http.post(this.signinUrl, userdata, this.options);
  }

  signup(userdata: any) {
    return this.http.post(this.signUpUrl, userdata, this.options);
  }
}
// https://msi.htoowaiyan.com/api/v1/users/signin
// https://api.themoviedb.org/3/movie/now_playing?api_key=435e44180b93a0d2c5376844bbb05fbb&language=en-US&page=2
