import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthserviceService } from './auth/authservice.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  autoLogin: boolean = false;
  autoLoginSubscription: Subscription
  constructor(private authService: AuthserviceService, private router: Router) {

  }
  ngOnInit(): void {
    this.authService.autoLogin();
    this.autoLoginSubscription = this.authService.user.subscribe((data) => {
      if (!data) {
        return;
      }
      if (data) {
        this.router.navigate(['/recipies']);
      }
    })
  };

  ngOnDestroy(): void {
    this.autoLoginSubscription.unsubscribe();
  }
}
