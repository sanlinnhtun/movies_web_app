import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  baseUrl: string='https://api.themoviedb.org/3/movie/';
  apiKey: string='435e44180b93a0d2c5376844bbb05fbb';

  getMovies(category: any){
    return this.http.get(`${this.baseUrl}${category}?api_key=${this.apiKey}&language=en-US&page=1`)
  }

}
// https://api.themoviedb.org/3/movie/now_playing?api_key=435e44180b93a0d2c5376844bbb05fbb&language=en-US&page=2