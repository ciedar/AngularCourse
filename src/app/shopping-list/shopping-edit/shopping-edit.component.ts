import { Input, Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('name', { static: false }) nameRef: ElementRef;
  @ViewChild('amount', { static: false }) amountRef: ElementRef;


  constructor(private shoppingList: ShoppingListService) {

  }

  sendIngredient() {
    const newName: string = this.nameRef.nativeElement.value;
    const newAmount: number = this.amountRef.nativeElement.value;
    const newItem: Ingredient = new Ingredient(newName, newAmount);
    this.shoppingList.addNewItem(newItem);


  }



}
