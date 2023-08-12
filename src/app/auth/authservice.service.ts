import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  exoresIn: string,
  localId: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  apiKey: string = `AIzaSyByUviVUYR4pnxqul6xlmpUpXYDETMM7fk`
  authFirebaseLink: string = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`
  constructor(private http: HttpClient) { }

  onRegister(email: string, password: string) {
    return this.http.post<AuthResponseData>(this.authFirebaseLink, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  onLogin() {

  }
}
