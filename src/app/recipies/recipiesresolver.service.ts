import { Injectable } from '@angular/core';

import { Recipie } from './recipies.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpManagmentService } from './http-managment.service';
import { RecipieService } from './recipies.service';

@Injectable({
  providedIn: 'root'
})
export class RecipiesresolverService implements Resolve<Recipie[]> {
  resolve(activateRoute: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Recipie[] | Observable<Recipie[]> | Promise<Recipie[]> {
    let recipies: Recipie[] = [];

    recipies = this.recipieService.getRecipie();

    if (recipies.length != 0) {
      return recipies;
    }

    if (recipies.length === 0) {
      return this.httpService.onFetchData();

    }

  }

  constructor(private httpService: HttpManagmentService, private recipieService: RecipieService) { }
}
