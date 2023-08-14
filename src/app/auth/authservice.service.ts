import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, catchError, throwError, tap, Subject } from 'rxjs';
import { User } from '../user.mode';


export interface AuthResponseData {
  email: string,
  password: string
  idToken: string,
  refreshToken: string,
  expiresIn: string,
  localId: string
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  public user = new Subject<User>;
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
        return throwError(this.error);
      }), tap((responseData) => {
        this.sendUser(responseData.email, responseData.localId, responseData.idToken, responseData.expiresIn)
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
        this.error = error.error.error.message
        return throwError(error);
      }), tap((responseData) => {
        this.sendUser(responseData.email, responseData.localId, responseData.idToken, responseData.expiresIn)
      })
    )
  }

  private sendUser(email: string, localId: string, idToken: string, expiresIn: string) {
    const expDate = new Date(new Date().getTime() + +expiresIn * 1000)
    const user = new User(email, localId, idToken, expDate)
    this.user.next(user);
  }
}
