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
  @Input() index: number;
  constructor() {

  }








}
