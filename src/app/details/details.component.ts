import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { Subscription } from 'rxjs';
import { Cast,CastDetail } from '../interface/cast-details';
import { Genre, MoviesDetails, ProductionCompany, ProductionCountry } from '../interface/movies-details';
import { Result, TrailersDetails } from '../interface/trailer';
// import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieSub: Subscription = new Subscription();
  trailerSub: Subscription= new Subscription();
  castSub: Subscription= new Subscription();

  loading: boolean= true;

  movieID!: number;
  poster: string='';
  back_poster: string='';
  overview: string='';
  casts:  Cast[] =[];
  genres: Genre[]=[];
  movietitle: string='';
  runtime!: number;
  release_date!: Date;
  companies: ProductionCompany[]=[];
  countries: ProductionCountry[]=[];
  trailer: Result[]=[];
  trailerkey:string='';
  rating!: number;
  imbd_rate: string='';
  homepage: string='';



  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private apiService:ApiService
    ){}

  ngOnInit() {
    this.movieID=this.activatedRoute.snapshot.params['movieid'];

    var poMovDet= this.apiService.getDetails(this.movieID);

    this.movieSub=poMovDet.subscribe({
      next: (response: MoviesDetails) => {
        this.overview=response.overview!;
        this.poster=response.poster_path!;
        this.back_poster=response.backdrop_path!;
        this.genres= response['genres']!;
        this.movietitle=response.title!;
        this.runtime=response.runtime!;
        this.rating=response.vote_average!;
        this.imbd_rate=this.rating.toFixed(1);
        this.runtime=response.runtime!;
        this.companies=response['production_companies']!;
        this.countries=response['production_countries']!;
        this.release_date=response.release_date!;
        this.homepage=response.homepage!;
        this.loading=false;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      }
    })


    var trailerResult=this.apiService.gettrailer(this.movieID)
    this.trailerSub=trailerResult.subscribe({
      next: (response: TrailersDetails) =>{
        this.trailer=response['results']!;
      for(let i=0; i < this.trailer.length; i++){
        if(this.trailer[i].type == "Trailer" || "Teaser"){
          this.trailerkey=this.trailer[i].key!;
          break;
        }
      }
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err)
      }
    })

    console.log("my trailler key is >>>>>>>>", this.trailerkey)

    this.getCast();
  }

  getCast(){
    var response= this.apiService.getcastdetails(this.movieID)
    this.castSub=response.subscribe({
      next: (response: CastDetail) => {
        this.casts=response['cast']!
      },
      error: (err: HttpErrorResponse)=>{
        console.log(err)
      }
    })
  }

  // traileryoutube() {
  //   return this.http.get(`https://www.youtube.com/watch?v=${this.trailerkey}`);
  // }

  goToDetails(castID: number){
    this.router.navigateByUrl(`cast/${castID}`)
  }

  ngOndestory() {
    if(this.movieSub){
      this.movieSub.unsubscribe
    }
    if(this.trailerSub){
      this.trailerSub.unsubscribe
    }
    if(this.castSub){
      this.castSub.unsubscribe
    }
  }
}
