import { EventEmitter } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";
import { Recipie } from '../recipies/recipies.model';

export class ShoppingListService {
    public sendNewItems = new EventEmitter<Ingredient[]>()

    ingredients: Ingredient[] = [
        new Ingredient("Apples", 10),
        new Ingredient("Tomato", 8)
    ];

    addNewItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.sendNewItems.emit(this.ingredients);
    }

    addNewIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.sendNewItems.emit(this.ingredients);
    }

    getItems() {
        return this.ingredients.slice();
    }
}