import { Input, Component, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  addIngredientForm: FormGroup;
  item: Ingredient;

  constructor(private shoppingList: ShoppingListService) {
  }

  ngOnInit(): void {
    this.addIngredientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required)
    })

  }

  sendIngredient(data: FormGroup) {
    const name = this.addIngredientForm.get('name').value;
    const amount = this.addIngredientForm.get('amount').value;
    this.item = new Ingredient(name, amount);
    this.shoppingList.addNewItem(this.item);
  }



}
