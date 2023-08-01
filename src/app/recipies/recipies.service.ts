import { EventEmitter, Injectable } from "@angular/core"
import { Recipie } from "./recipies.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { FormGroup } from "@angular/forms";

@Injectable()
export class RecipieService {
    public selectedRecipie = new EventEmitter<Recipie[]>();


    recipies: Recipie[] = [
        new Recipie("test2222", "test1", "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1380&t=st=1686430398~exp=1686430998~hmac=0ef6308c7f99450a658fbc149f06ed5920578ef571505796d4cc8e52055b1c58",
            [
                new Ingredient("Meat", 2),
                new Ingredient("Kakao", 4)
            ]),
        new Recipie("test11111", "test", "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1380&t=st=1686430398~exp=1686430998~hmac=0ef6308c7f99450a658fbc149f06ed5920578ef571505796d4cc8e52055b1c58",
            [
                new Ingredient("Meat", 2),
                new Ingredient("Kakao", 4)
            ])
    ];

    constructor(private shoppingList: ShoppingListService) {

    }

    getRecipie() {
        return this.recipies.slice();
    }

    pushIngredientToShoppingList(ingredient: Ingredient[]) {
        this.shoppingList.addNewIngredients(ingredient);
    }

    getRecipieById(id: number) {
        return this.recipies[id];
    }

    addNewRecipie(data: Recipie) {
        this.recipies.push(data);
        this.selectedRecipie.emit(this.recipies)
    }

    updateRecipie(recipieId: number, data: Recipie) {
        this.recipies[recipieId] = new Recipie(
            data.name,
            data.description,
            data.imagePath,
            data.ingredient)

        this.selectedRecipie.emit(this.recipies)
    }





}