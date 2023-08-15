import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpManagmentService } from '../recipies/http-managment.service';
import { RecipieService } from '../recipies/recipies.service';
import { Subscription } from 'rxjs';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router';
import { User } from '../user.mode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: Subscription;
  isAuthenticated: boolean = false;
  constructor(private httpService: HttpManagmentService, private recipieService: RecipieService, private authService: AuthserviceService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.user.subscribe((user: User) => {
      this.isAuthenticated = !user ? false : true;
      console.log(this.isAuthenticated)
    })
  }
  ngOnDestroy(): void {
    this.user.unsubscribe();
  }

  saveData() {
    this.httpService.onSaveData();
  }

  fetchData() {
    this.httpService.onFetchData()
  }

  logout() {
    this.isAuthenticated = false;
  }
}
