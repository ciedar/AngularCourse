import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe, catchError, throwError, tap, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../user.mode';
import { Router } from '@angular/router';


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
  expTokenTime: any;
  public user = new BehaviorSubject<User>(null);
  public error: string;
  apiKey: string = `AIzaSyByUviVUYR4pnxqul6xlmpUpXYDETMM7fk`
  registerFirebaseLink: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`
  loginFirebaseLink: string = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`
  constructor(private http: HttpClient, private router: Router) { }



  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'))

    if (!userData) {
      return;
    }

    const newUser = new User(userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate))

    if (newUser.token) {
      this.user.next(newUser);
      const time = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(time)
    }
  }

  autoLogout(expirationTime: number) {
    console.log(new Date(expirationTime).getHours())
    this.expTokenTime = setTimeout(() => {
      this.logout();
    }, expirationTime)
  }


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
    this.autoLogout(+expiresIn * 1000)
    localStorage.setItem('userData', JSON.stringify(user));
  }

  logout() {
    this.user.next(null)
    this.router.navigate(['auth'])
    localStorage.removeItem('userData');
    if (this.expTokenTime) {
      clearTimeout(this.expTokenTime);
    }
    this.expTokenTime = null;
  }
}
