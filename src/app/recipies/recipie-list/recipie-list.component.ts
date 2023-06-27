import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipieService } from '../recipies.service';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[];

  constructor(private recipieService: RecipieService) {


  }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipie();
  }






}



