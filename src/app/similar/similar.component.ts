import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Similar, Result } from '../interface/similar'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {

  constructor (private apiService: ApiService, private activatedroute: ActivatedRoute) {}

  sml_movieID!: number;
  sml_movie!: number;
  smlmovielist: Result[]=[];
  // imbd: string='';

  moviesub: Subscription= new Subscription();

  ngOnInit(): void {
    this.sml_movieID= this.activatedroute.snapshot.params['movieid']
    this.getsimilarmovies()
  }

  getsimilarmovies(){
    var result= this.apiService.getsimilarmovies(this.sml_movieID);
    this.moviesub=result.subscribe({
      next: (response: Similar) => {
        this.smlmovielist=response.results!;
        // this.sml_movie=response.total_results!;
      }
    })
  }

  // getsimilarmovies(){
  //   return new Promise ( (resolve)=> {
  //     var result= this.apiService.getsimilarmovies(this.sml_movieID);
  //     this.moviesub=result.subscribe({
  //       next: (response: Similar) => {
  //         this.smlmovielist=response['results']!;
  //         // this.imbd=this.smlmovielist.toFixed(1);
  //         this.sml_movie=response.total_results!;
  //         console.log(this.smlmovielist)
  //         resolve(true)
  //       },
  //       error: (err: HttpErrorResponse) => {
  //         console.log(err)
  //         resolve(false)
  //       }
  //     })
  //   })
  // }

}
