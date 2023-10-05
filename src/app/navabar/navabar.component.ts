import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent {
  constructor(private cookieService: CookieService,private route: Router ,private activatedRoute: ActivatedRoute){}

  logout(){
    this.cookieService.delete('token')
    this.route.navigateByUrl('')
    console.log(this.cookieService.get('token'))
  }
}
