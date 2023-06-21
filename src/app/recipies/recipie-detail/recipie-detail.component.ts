import { Component, Input } from '@angular/core';
import { Recipie } from '../recipies.model';



@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent {
  @Input() recipie: Recipie;
}
