import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipieService } from '../recipies.service';
import { Recipie } from '../recipies.model';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
  recipie: Recipie;
  editForm: FormGroup
  Ingredient: Ingredient;
  id: number;

  constructor(private recipieServie: RecipieService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.recipie = this.recipieServie.getRecipieById(Number(params['id']));
      this.id = params['id'];
    })

    this.editForm = new FormGroup({
      'recipieName': new FormControl(this.recipie.name, Validators.required),
      'recipieDescription': new FormControl(this.recipie.description, Validators.required),
      'recipieImagePath': new FormControl(this.recipie.imagePath, Validators.required),
      'ing': new FormArray([])
    })

    if (this.recipie?.ingredient) {
      for (let ing of this.recipie.ingredient) {
        (<FormArray>this.editForm.get('ing')).push(new FormGroup({
          'name': new FormControl(ing.name),
          'amount': new FormControl(ing.amount)
        }))
      }
    }
    console.log(this.id);
  }

  getRecipieIngredient() {
    return (<FormArray>this.editForm.get('ing')).controls;
  }

  editFormSubmit() {
    const name = this.editForm.value.recipieName
    const desc = this.editForm.value.recipieDescription
    const path = this.editForm.value.recipieImagePath
    const formArray = this.editForm.get('ing');
    // const ingredientData = this.editForm.value['ing'];
    const ingredientData = (<FormArray>formArray).controls.map((data: FormGroup) => {
      const name = data.value.name;
      const amount = data.value.amount;
      const newIngredient = new Ingredient(name, amount);
      return newIngredient;
    })
    const newRecipie = new Recipie(name, desc, path, ingredientData)
    this.recipieServie.updateRecipie(this.id, newRecipie);
    this.router.navigate(['recipies', this.id])
  }

  editFormClear() {
    this.editForm.reset();
  }

  onAddIngredient() {
    (<FormArray>this.editForm.get('ing')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onDelete(index: number) {
    (<FormArray>this.editForm.get('ing')).removeAt(index);
  }
  onBack() {
    this.router.navigate(['recipies', this.id]);
  }
}
