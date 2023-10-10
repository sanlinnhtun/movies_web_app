import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from './service/auth.guard';
import { CastDetailsComponent } from './cast-details/cast-details.component';
import { InnerSkeletonloaderComponent } from './inner-skeletonloader/inner-skeletonloader.component';
import { OuterSkeletonloaderComponent } from './outer-skeletonloader/outer-skeletonloader.component';
import { CastskeleComponent } from './castskele/castskele.component';
import { SpinloaderComponent } from './spinloader/spinloader.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'details/:movieid',
    component: DetailsComponent,
    canActivate: [authGuard],
  },{
    path: 'spin',
    component: SpinloaderComponent
  },{
    path: 'cast/:castid',
    component: CastDetailsComponent,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: ErrorComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
