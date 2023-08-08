import { Component } from '@angular/core';
import { HttpManagmentService } from '../recipies/http-managment.service';
import { RecipieService } from '../recipies/recipies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private httpService: HttpManagmentService, private recipieService: RecipieService) { }
  saveData() {
    this.httpService.onSaveData();
  }

  fetchData() {
    this.httpService.onFetchData()
  }
}
