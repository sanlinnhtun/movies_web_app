import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  moviesub: Subscription = new Subscription();

  posterdetail:any=[];
  overview: string='';
  movieid!:number;
  casts:any =[];
  genres: any=[];

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private apiService:ApiService
    ){}

  ngOnInit() {
    this.movieid=this.activatedRoute.snapshot.params['movieid'];
    var poMovDet= this.http.get(`https://api.themoviedb.org/3/movie/${this.movieid}?api_key=435e44180b93a0d2c5376844bbb05fbb&language=en-US&page=2`)

    // var poMovDet= this.apiService.getMovieDetails(this.movieid);
    this.moviesub=poMovDet.subscribe({
      next: (response: any) => {
        this.posterdetail=response
        this.genres=response.genres
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

    // poMovDet.subscribe({
    //   next:(mvty: any) => {
    //     this.genres=mvty
    //     console.log(">>>>>>>>>>>>>>>>",this.genres)
    //   },
    //   error: (err: HttpErrorResponse)=>{
    //     console.log(err)
    //   }
    // })

    this.moviesub=poMovDet.subscribe({
      next: (oview: any) => {
        this.overview=oview
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })

    this.getCast();
  }

  getCast(){
    var response= this.http.get(`https://api.themoviedb.org/3/movie/${this.movieid}/credits?api_key=435e44180b93a0d2c5376844bbb05fbb&language=en-US&page=2`)
    response.subscribe({
      next: (data: any) => {
        this.casts=data['cast']
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }

  ngOndestory(): void {
    this.moviesub.unsubscribe
  }
}
