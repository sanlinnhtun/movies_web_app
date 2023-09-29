import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../service/api.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Actors, ActorsMovie, ActorCast } from 'src/app/interface/interface';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {

  constructor(private apiService: ApiService, 
    private http:HttpClient, 
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}

  moviesub: Subscription = new Subscription();

  actorid!:number;
}