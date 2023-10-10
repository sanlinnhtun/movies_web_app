import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
// import { CastDetail,Cast } from '../interface/cast-details';
import { Onecast } from '../interface/one-cast';
import { Subscription, from } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Castmovies,Cast } from '../interface/cast-data-movies'

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit{

  constructor(
    private router: Router, 
    private apiService:ApiService,
    private activatedRoute:ActivatedRoute){}

  movieSub: Subscription = new Subscription();
  castID!: number;
  cast_poster: string='';
  back_poster: string='';
  castname: string='';
  castbirthday!: Date;
  castdeatday!: Date;
  castbio: string='';
  castbirthplace: string='';
  knwo_for: string='';
  
  castMovielist: Cast[]=[];

  loading: boolean=true;

  ngOnInit(): void {
    this.castID= this.activatedRoute.snapshot.params['castid'];
    
    this.getonecast();
    this.getcastmovies();
  }

  getcastmovies(){
    var result= this.apiService.getcastmovies(this.castID)
    this.movieSub=result.subscribe({
      next: (response: Castmovies)=>{
        this.castMovielist=response['cast']!;
        console.log("movies list is >>>>>>>>..",this.castMovielist)
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }

  getonecast() {
    var result= this.apiService.getonecast(this.castID);
    this.movieSub= result.subscribe({
      next: (response: Onecast) => {
        this.cast_poster=response.profile_path!;
        this.castbio=response.biography!;
        this.castbirthday=response.birthday!;
        this.castbirthplace=response.place_of_birth!;
        this.castname=response.name!;
        this.knwo_for=response.known_for_department!;
        this.castdeatday=response.deathday!;
        this.loading=false;
        // console.log("PP >>>>",response.profile_path)
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })
  }

  goToDetails(movieId: number){
    this.router.navigateByUrl(`details/${movieId}`)
  }

  ngOndestory(): void {
    this.movieSub.unsubscribe
  }
  // goTodetails(movieID: number){
  //   this.router.navigateByUrl(`castdetails/${movieID}`)
  // }

}
