import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Similar, Result } from '../interface/similar';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css'],
})
export class SimilarComponent implements OnInit {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private activatedroute: ActivatedRoute
  ) {}

  movieID!: number;
  sml_movie!: number;
  smlmovielist: Result[] = [];

  loading: boolean = true;

  movieSub: Subscription = new Subscription();

  async ngOnInit() {
    this.movieID = this.activatedroute.snapshot.params['movieid'];
    await this.getsimilarmovies();
  }

  getsimilarmovies() {
    return new Promise((reslove) => {
      var result = this.apiService.getsimilarmovies(this.movieID);
      this.movieSub = result.subscribe({
        next: (response: Similar) => {
          this.smlmovielist = response.results!;
          reslove(true);
          this.loading = false;
          // this.sml_movie=response.total_results!;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
          reslove(false);
        },
      });
    });
  }

  // goToDetails(movieID: number){
  //   this.router.navigate([`details/${movieID}`])
  // }

  goToDetails(movieID: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([`details/${movieID}`]);
  }

  ngOndestory(): void {
    this.movieSub.unsubscribe;
  }
}
