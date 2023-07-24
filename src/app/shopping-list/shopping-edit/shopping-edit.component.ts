import { Input, Component, Output, EventEmitter, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  addIngredientForm: FormGroup;
  item: Ingredient;
  subscription: Subscription;
  editMode: boolean = false;
  editedItem: Ingredient;
  editedItemIndex: number;
  constructor(private shoppingList: ShoppingListService) {
  }

  ngOnInit(): void {
    this.addIngredientForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, this.greaterThan.bind(this)])
    })

    this.subscription = this.shoppingList.editEvent.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingList.getIngredient(index);
      this.addIngredientForm.setValue({
        'name': this.editedItem.name,
        'amount': this.editedItem.amount
      })
    })

  }

  sendIngredient() {
    const name = this.addIngredientForm.get('name').value;
    const amount = this.addIngredientForm.get('amount').value;
    this.item = new Ingredient(name, amount);
    // this.shoppingList.addNewItem(this.item);

    if (this.editMode) {
      this.shoppingList.updateIngredient(this.editedItemIndex, this.item);
    } else {
      this.shoppingList.addNewItem(this.item);
    }
    // this.addIngredientForm.reset();
    this.addIngredientForm.setValue({
      'name': null,
      'amount': null
    })
    this.editMode = false;
  }

  greaterThan(data: FormGroup): { [s: string]: boolean } {
    if (data.value < 0) {
      console.log(data.value)
      return { 'numberError': true }
    }
    return null
  }

  onDelete() {
    this.editMode = false;
    this.shoppingList.onDeleteItem(this.editedItemIndex)
    this.addIngredientForm.reset();
  }

  onClear() {
    this.addIngredientForm.reset();
    this.editMode = false;

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
