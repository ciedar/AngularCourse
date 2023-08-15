import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({ providedIn: 'root' })


export class AuthGuard implements CanActivate {

  constructor(private authService: AuthserviceService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean | Observable<boolean> {
    return this.authService.user.pipe(take(1), map(response => {
      return response ? true : false;
    }), tap(response => {
      if (!response) {
        return this.router.navigate(['/auth'])
      }
      if (response) {
        return true;
      }
    }))
  }
}
