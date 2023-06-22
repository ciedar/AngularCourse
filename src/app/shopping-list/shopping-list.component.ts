import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 10),
    new Ingredient("Tomato", 8)
  ];
  name: string = "darek";
  addNewItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }


}
