import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      'recipieImagePath': new FormControl(null, Validators.required)
    })
  }


  addNewRecipie(data: FormGroup) {
    const name = data.value.recipieName
    const desc = data.value.recipieDescription
    const path = data.value.imagePath
    const ing = [new Ingredient("asdas", 2)]
    this.newRecipie = new Recipie(name, desc, path, ing)
    this.recipieService.addNewRecipie(this.newRecipie);

  }
}
