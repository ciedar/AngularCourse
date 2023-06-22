import { Input, Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('name', { static: false }) nameRef: ElementRef;
  @ViewChild('amount', { static: false }) amountRef: ElementRef;
  @Output() sendIngredientEvent = new EventEmitter<Ingredient>();
  @Input() nameInput: string;

  sendIngredient() {
    const newName: string = this.nameRef.nativeElement.value;
    const newAmount: number = this.amountRef.nativeElement.value;
    const newItem: Ingredient = new Ingredient(newName, newAmount);


    this.sendIngredientEvent.emit(newItem);
  }



}
