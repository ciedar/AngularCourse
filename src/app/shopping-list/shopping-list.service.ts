import { EventEmitter } from '@angular/core';

import { Ingredient } from "../shared/ingredient.model";
import { Recipie } from '../recipies/recipies.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    public sendNewItems = new EventEmitter<Ingredient[]>()
    public editEvent = new Subject<number>();
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

    getIngredient(index: number) {
        return this.ingredients[index];
    }


    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.sendNewItems.emit(this.ingredients.slice());
    }

    onDeleteItem(index: number) {
        this.ingredients.splice(index, 1);
        this.sendNewItems.emit(this.ingredients.slice());
    }
}