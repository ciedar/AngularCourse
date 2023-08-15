import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { RecipieService } from './recipies.service';
import { Recipie } from './recipies.model';
import { Subject, exhaustMap, map, take, tap } from 'rxjs'
import { AuthserviceService } from '../auth/authservice.service';
@Injectable()
export class HttpManagmentService {

  recipieArrayCopy: Recipie[] = [];
  url: string = 'https://angular-learning-818f3-default-rtdb.europe-west1.firebasedatabase.app/recipies-list.json';
  constructor(private recipieService: RecipieService, private http: HttpClient, private authService: AuthserviceService) {
  }


  onSaveData() {
    this.recipieArrayCopy = this.recipieService.getRecipie();

    return this.http.put(this.url, this.recipieArrayCopy)
    // return this.authService.user.pipe(take(1), exhaustMap(responseData => {
    //   return this.http.put(this.url, this.recipieArrayCopy, {
    //     params: new HttpParams().set('auth', responseData.token)
    //   })
    // }))
  }

  onFetchData() {
    return this.http.get<Recipie[]>(this.url).pipe(
      map(recipies => {
        return recipies.map(recipie => {
          return { ...recipie, ingredient: recipie.ingredient ? recipie.ingredient : [] }
        })
      }), tap(data => {
        this.recipieService.setRecipies(data);
      })
    )

  }

}
