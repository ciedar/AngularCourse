import { EventEmitter } from "@angular/core"
import { Recipie } from "./recipies.model";


export class RecipieService {
    public selectedRecipie = new EventEmitter<Recipie>();

    recipies: Recipie[] = [
        new Recipie("test2", "test1", "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1380&t=st=1686430398~exp=1686430998~hmac=0ef6308c7f99450a658fbc149f06ed5920578ef571505796d4cc8e52055b1c58"),
        new Recipie("test2", "test", "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=1380&t=st=1686430398~exp=1686430998~hmac=0ef6308c7f99450a658fbc149f06ed5920578ef571505796d4cc8e52055b1c58")
    ];

    constructor() {

    }

    getRecipie() {
        return this.recipies.slice();
    }


}