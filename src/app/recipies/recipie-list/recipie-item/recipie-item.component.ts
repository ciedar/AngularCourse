import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipie } from '../../recipies.model';
@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {
  @Input() recipie: Recipie;
  @Output() selectedRecipie = new EventEmitter<void>();


  selectedRecipieSendEvent() {
    this.selectedRecipie.emit();
  }

}
