import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipie } from '../recipies.model';
import { RecipieService } from '../recipies.service';
import { Router } from '@angular/router';
import { HttpManagmentService } from '../http-managment.service';
@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[];
  rec: Recipie;
  constructor(private recipieService: RecipieService, private router: Router, private httpService: HttpManagmentService) {


  }

  ngOnInit() {
    this.recipies = this.recipieService.getRecipie();
    this.recipieService.selectedRecipie.subscribe((data: Recipie[]) => {
      this.recipies = data;
    })

  }


  // handleClick() {
  //   this.router.navigate([])
  // }









}



