import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipieService } from '../recipies.service';
import { Recipie } from '../recipies.model';
import { Form, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
  recipie: Recipie;
  editForm: FormGroup

  constructor(private recipieServie: RecipieService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.recipie = this.recipieServie.getRecipieById(Number(params['id']));
    })

    this.editForm = new FormGroup({
      'recipieName': new FormControl(this.recipie.name, Validators.required),
      'recipieDescription': new FormControl(this.recipie.description, Validators.required),
      'recipieImagePath': new FormControl(this.recipie.imagePath, Validators.required),
      'ing': new FormArray([])
    })

    if (this.recipie.ingredient) {
      for (let ing of this.recipie.ingredient) {
        (<FormArray>this.editForm.get('ing')).push(new FormGroup({
          'name': new FormControl(ing.name),
          'amount': new FormControl(ing.amount)
        }))
      }
    }

  }

  getRecipieIngredient() {
    return (<FormArray>this.editForm.get('ing')).controls;
  }

  editFormSubmit() {
    console.log(this.editForm)
  }

  editFormClear() {
    this.editForm.reset();
  }


}
