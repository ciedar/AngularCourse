import { Component, OnInit } from '@angular/core';
// import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredientList: Ingredient[];

  constructor(private shoppingList: ShoppingListService) {

  }

  ngOnInit() {
    this.ingredientList = this.shoppingList.getItems();
    this.shoppingList.sendNewItems.subscribe((item: Ingredient[]) => {
      this.ingredientList = item;
    })
  }


}
