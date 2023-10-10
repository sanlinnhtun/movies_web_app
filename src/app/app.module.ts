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
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { FooterElementComponent } from './footer-element/footer-element.component';
import { SliderComponent } from './slider/slider.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { OuterSkeletonloaderComponent } from './outer-skeletonloader/outer-skeletonloader.component';
import { InnerSkeletonloaderComponent } from './inner-skeletonloader/inner-skeletonloader.component';
import { CastskeleComponent } from './castskele/castskele.component';
import { SpinloaderComponent } from './spinloader/spinloader.component'

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
    CastDetailsComponent,
    FooterElementComponent,
    SliderComponent,
    OuterSkeletonloaderComponent,
    InnerSkeletonloaderComponent,
    CastskeleComponent,
    SpinloaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
