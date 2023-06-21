import { Component, Input } from '@angular/core';
import { Recipie } from './recipies.model';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent {
  @Input() recipie: Recipie;
  recipieSelected: Recipie;


}
