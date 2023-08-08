import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { RecipieService } from './recipies.service';
import { Recipie } from './recipies.model';
import { Subject, map, tap } from 'rxjs'
@Injectable()
export class HttpManagmentService {
  // public event = new Subject<Recipie>;
  recipieArrayCopy: Recipie[] = [];
  url: string = 'https://angular-learning-818f3-default-rtdb.europe-west1.firebasedatabase.app/recipies-list.json';
  constructor(private recipieService: RecipieService, private http: HttpClient) {
  }


  onSaveData() {
    this.recipieArrayCopy = this.recipieService.getRecipie();
    this.http.put(this.url, this.recipieArrayCopy).subscribe((data) => {
      console.log(data)
    });
  }

  onFetchData() {
    this.http.get<Recipie[]>(this.url).subscribe((data) => {
      this.recipieService.setRecipies(data);
    })
  }


}
