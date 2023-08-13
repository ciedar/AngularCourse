import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, catchError, throwError } from 'rxjs';


export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  exoresIn: string,
  localId: string
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public error: string;
  apiKey: string = `AIzaSyByUviVUYR4pnxqul6xlmpUpXYDETMM7fk`
  registerFirebaseLink: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`
  loginFirebaseLink: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`
  constructor(private http: HttpClient) { }

  onRegister(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.registerFirebaseLink, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(error => {
        this.error = error.error.error.message
        console.log(this.error)
        return throwError(this.error);
      })
    )

  }

  onLogin(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.loginFirebaseLink, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(error => {
        console.log(error)
        this.error = error.error.error.message
        return throwError(error);
      })
    )
  }
}
