import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipie } from '../recipies/recipies.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipieService } from '../recipies/recipies.service';

@Component({
  selector: 'app-new-recipie',
  templateUrl: './new-recipie.component.html',
  styleUrls: ['./new-recipie.component.css']
})
export class NewRecipieComponent implements OnInit {
  newRecipieForm: FormGroup
  newRecipie: Recipie
  newIngredient: Ingredient;


  constructor(private recipieService: RecipieService) { }



  ngOnInit(): void {
    this.newRecipieForm = new FormGroup({
      'recipieName': new FormControl(null, Validators.required),
      'recipieDescription': new FormControl(null, Validators.required),
      'recipieImagePath': new FormControl(null, Validators.required),
      'ing': new FormArray([])
    })
  }


  addNewRecipie(data: FormGroup) {
    const name = data.value.recipieName
    const desc = data.value.recipieDescription
    const path = data.value.imagePath
    const formArray = this.newRecipieForm.get('ing');

    const ingredientData = (<FormArray>formArray).controls.map((data: FormGroup) => {
      const name = data.value.ingredientName;
      const amount = data.value.ingredientAmount;
      const newIngredient = new Ingredient(name, amount);
      return newIngredient;
    })

    this.newRecipie = new Recipie(name, desc, path, ingredientData)
    this.recipieService.addNewRecipie(this.newRecipie);

  }




  getIngredients() {
    return (<FormArray>this.newRecipieForm.get('ing')).controls
  }
  onAddIngredient() {
    const arrayItem = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientAmount': new FormControl(null, Validators.required)
    });

    (<FormArray>this.newRecipieForm.get('ing')).push(arrayItem);

  }
}
