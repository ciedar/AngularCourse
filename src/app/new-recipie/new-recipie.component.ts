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
    const lel = data.value.recipieIngredient
    console.log(data, lel)
    // const ing = new Ingredient(data.value.recipieIngredient.recipieName, data.value.recipieIngredient.recipieAmount)
    // console.log(ing)
    // console.log(data.value)

    // this.newRecipie = new Recipie(name, desc, path, ing)
    // this.recipieService.addNewRecipie(this.newRecipie);

  }


  onAddHobby() {
    // const newArrayItem = new FormControl(null, Validators.required);
    // (<FormArray>this.newRecipieForm.get('recipieIngredient')).push(newArrayItem)
    // console.log(newArrayItem)
  }

  getIngredients() {
    // return (<FormArray>this.newRecipieForm.get('recipieIngredient').controls).
  }
  onAddIngredient() {

  }
}
