import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipieService } from '../recipies.service';
import { Recipie } from '../recipies.model';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
  recipie: Recipie;
  // edit: boolean = false;
  // id: number;
  constructor(private recipieServie: RecipieService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.recipie = this.recipieServie.getRecipieById(Number(params['id']));
      // this.edit = params['id'] != null;
    })
    // const link = this.activeRoute.snapshot.params['new'];
    // console.log(link)
  }



}
