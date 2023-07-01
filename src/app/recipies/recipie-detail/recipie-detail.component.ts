import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Recipie } from '../recipies.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipieService } from '../recipies.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';


@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent {
  @Input() recipie: Recipie;



  constructor(private recipieService: RecipieService, private shoppingList: ShoppingListService, private element: ElementRef) {

  }

  sendNewIngredients() {
    this.recipieService.sendToShoppingList(this.recipie.ingredient);
  }
}
