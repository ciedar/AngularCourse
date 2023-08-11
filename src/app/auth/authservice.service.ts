import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.mode';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  regiusterUrl: string = `https://angular-learning-818f3-default-rtdb.europe-west1.firebasedatabase.app/users.json`
  // data: User;
  constructor(private http: HttpClient) { }

  onRegister(data: User) {
    return this.http.put(this.regiusterUrl, data);
  }
}
