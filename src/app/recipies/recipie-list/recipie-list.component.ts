import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipieService } from '../recipies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[];

  constructor(private recipieService: RecipieService, private router: Router) {


  }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipie();
  }


  // handleClick() {
  //   this.router.navigate([])
  // }









}



