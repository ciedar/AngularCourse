import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from './recipies.model';
import { RecipieService } from './recipies.service';


@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  providers: [RecipieService]
})
export class RecipiesComponent implements OnInit {
  // @Input() recipie: Recipie;
  recipieSelected: Recipie;

  constructor(private recipieService: RecipieService) {

  }


  ngOnInit() {
    this.recipieService.selectedRecipie.subscribe((recipie: Recipie) => {
      this.recipieSelected = recipie;
    })
  }


}



// LEARNING
