import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../../recipies.model';
import { RecipieService } from '../../recipies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {
  // @Input
  @Input() recipie: Recipie;

  constructor(private recipieService: RecipieService, private router: Router) {

  }

  // handleClick(id: number) {
  //   console.log(this.recipie)
  //   this.router.navigate(['/recipies', id]);
  // }






}
