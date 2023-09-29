import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


export const authGuard: CanActivateFn = (route, state) => {
  const cookieService: CookieService = inject(CookieService);
  const router: Router = inject (Router)
  if(cookieService.get('token')){
    return true
  }else {
    router.navigateByUrl('')
    return false
  };
};
