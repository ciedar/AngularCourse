import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';
import { RecipieService } from './recipies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent {
  // @Input() recipie: Recipie;
  recipieSelected: Recipie;

  constructor(private recipieService: RecipieService, private router: Router) {

  }


  // ngOnInit() {
  //   this.recipieService.selectedRecipie.subscribe((recipie: Recipie) => {
  //     this.recipieSelected = recipie;
  //   })
  // }




}



// LEARNING
