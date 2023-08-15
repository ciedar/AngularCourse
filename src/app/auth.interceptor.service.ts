import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthserviceService } from './auth/authservice.service';
@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthserviceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedResponse = req.clone({
          params: new HttpParams().set('auth', user.token)
        })
        return next.handle(modifiedResponse);
      })
    )
  }
}
