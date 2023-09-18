import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription} from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularList=[];
  playinNowList=[];
  // topRatedList=[];
  // upComingList=[];

  constructor(private apiService: ApiService){};

  movieSub: Subscription= new Subscription();

  getPlayingNow() {
    var result = this.apiService.getMovies('now_playing')
    this.movieSub = result.subscribe({
      next: (response: any) =>{
        this.playinNowList= response['results']
      },
      error:(err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  };

  getPopular() {
    this.apiService.getMovies('popular');
    console.log('click work!')
  };

  getTopRated() {
    this.apiService.getMovies('top_rated');
  };

  getUpComing() {
    this.apiService.getMovies('upcoming');
  };
}
