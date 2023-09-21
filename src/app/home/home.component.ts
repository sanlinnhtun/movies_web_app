import { Component,OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription} from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularList=[];
  playingNowList=[];
  topRatedList=[];
  upComingList=[];

  constructor(private apiService: ApiService){};

  movieSub: Subscription= new Subscription();

  getPopular() {
    return new Promise((resolve)=>{
      var result=this.apiService.getMovies('popular');
      this.movieSub=result.subscribe({
        next: (response: any) => {
          this.popularList = response['results']
          console.log(response['results'])
          resolve(true)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        resolve(false)
        }
      })
    })
  };

  getPlayingNow() {
    return new Promise((resolve) => {
      var result = this.apiService.getMovies('now_playing')
      this.movieSub = result.subscribe({
        next: (response: any) =>{
          this.playingNowList= response['results']
          resolve(true)
        },
        error:(err: HttpErrorResponse) =>{
          console.log(err);
          resolve(false)
        }
      })
    })
  };

  getTopRated() {
    return new Promise ((reslove) => {
      var result=this.apiService.getMovies('top_rated');
      this.movieSub =result.subscribe({
        next:(response: any) => {
          this.topRatedList=response['results']
          reslove(true)
        },
        error: (err: HttpErrorResponse)=>{
          console.log(err)
          reslove(false)
        }
      })
    })
  };

  getUpComing() {
    return new Promise ((reslove) => {
      var result=this.apiService.getMovies('upcoming');
      this.movieSub=result.subscribe({
        next: (response: any)=>{
          this.upComingList=response['results']
          reslove(true)
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
          reslove(false)
        }
      })
    })
  };

  async ngOnInit() {

    console.log("--------------------BEFORE-----------------")

    await this.getPopular();

    console.log("----------------------after----------------------")

    await this.getPlayingNow();

    await this.getTopRated();

    await this.getUpComing();

    // var result=this.apiService.getMovies('popular');
    // this.movieSub=result.subscribe({
    //   next: (response: any) => {
    //     this.popularList = response['results']
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err);
    //   }
    // });


    // var result = this.apiService.getMovies('now_playing')
    // this.movieSub = result.subscribe({
    //   next: (response: any) =>{
    //     this.playingNowList= response['results']
    //   },
    //   error:(err: HttpErrorResponse) =>{
    //     console.log(err);
    //   }
    // });

    // var result=this.apiService.getMovies('top_rated');
    // this.movieSub =result.subscribe({
    //   next:(response: any) => {
    //     this.topRatedList=response['results']
    //   },
    //   error: (err: HttpErrorResponse)=>{
    //     console.log(err)
    //   }
    // });

    // var result=this.apiService.getMovies('upcoming');
    // this.movieSub=result.subscribe({
    //   next: (response: any)=>{
    //     this.upComingList=response['results']
    //   },
    //   error: (err: HttpErrorResponse) => {
    //     console.log(err)
    //   }
    // });
  }

  
}
