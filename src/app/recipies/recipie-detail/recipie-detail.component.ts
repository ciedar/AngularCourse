import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipieService } from '../recipies.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipie: Recipie;
  id: number;
  edit: boolean = false;

  constructor(private recipieService: RecipieService, private shoppingList: ShoppingListService, private activeRoute: ActivatedRoute, private router: Router) {

  }

  addNewItems() {
    this.recipieService.pushIngredientToShoppingList(this.recipie.ingredient);
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.recipie = this.recipieService.getRecipieById(Number(params['id']))
      this.id = Number(params['id'])
      this.edit = params['id'] != null;

    })
  }
  deleteRecipie(id: number) {
    this.recipieService.deleteRecipie(id);
    this.router.navigate([''])
  }
}
