import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HightlightDirective } from './hightlight.directive';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SimilarComponent } from './similar/similar.component';
import { NavabarComponent } from './navabar/navabar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    ErrorComponentComponent,
    DetailsComponent,
    SignInComponent,
    SignUpComponent,
    HightlightDirective,
    RecommendationComponent,
    SimilarComponent,
    NavabarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
