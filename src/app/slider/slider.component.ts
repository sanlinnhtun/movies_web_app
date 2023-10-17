import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  movieSub: Subscription = new Subscription();

  popularList = [];
  playingNowList = [];
  topRatedList = [];
  upComingList = [];

  async ngOnInit() {
    await this.getPopular();
    await this.getPlayingNow();
    await this.getTopRated();
    await this.getUpComing();
  }

  getPopular() {
    return new Promise((reslove) => {
      var result = this.apiService.getMovies('popular');
      this.movieSub = result.subscribe({
        next: (respone: any) => {
          this.popularList = respone['results'];
          reslove(true);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          reslove(false);
        },
      });
    });
  }

  getPlayingNow() {
    return new Promise((reslove) => {
      var result = this.apiService.getMovies('now_playing');
      this.movieSub = result.subscribe({
        next: (respone: any) => {
          this.popularList = respone['results'];
          reslove(true);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          reslove(false);
        },
      });
    });
  }

  getTopRated() {
    return new Promise((reslove) => {
      var result = this.apiService.getMovies('top_rated');
      this.movieSub = result.subscribe({
        next: (respone: any) => {
          this.popularList = respone['results'];
          reslove(true);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          reslove(false);
        },
      });
    });
  }

  getUpComing() {
    return new Promise((reslove) => {
      var result = this.apiService.getMovies('upcoming');
      this.movieSub = result.subscribe({
        next: (respone: any) => {
          this.popularList = respone['results'];
          reslove(true);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          reslove(false);
        },
      });
    });
  }

  ngOndestory(): void {
    this.movieSub.unsubscribe;
  }
}
