import { Component, Input } from '@angular/core';
import { Recipie } from '../../recipies.model';
import { RecipieService } from '../../recipies.service';
@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {
  @Input() recipie: Recipie;

  constructor(private recipieService: RecipieService) {

  }
  recipieEventSend() {
    this.recipieService.selectedRecipie.emit(this.recipie);
  }







}
