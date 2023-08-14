import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpManagmentService } from '../recipies/http-managment.service';
import { User } from '../user.mode';
import { AuthResponseData, AuthserviceService } from './authservice.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  inLoginMode: boolean = false;
  inputForm: FormGroup;
  // email: string = ''
  isLoading: boolean = false;
  error: string = null;
  confirmMessage: string = null
  user: User

  constructor(private authService: AuthserviceService) {

  }
  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }
  switchToLogin() {
    this.inLoginMode = !this.inLoginMode;
  }

  switchToRegister() {
    this.inLoginMode = !this.inLoginMode;
  }
  private turnOffSpinner() {
    this.isLoading = false;
    this.error = null
  }

  submitForm(data: FormGroup) {
    this.authService.user.subscribe((data: User) => {
      this.user = data;
    })
    let authObs: Observable<AuthResponseData>
    const email = data.value.email
    const password = data.value.password
    this.isLoading = true;

    if (this.inLoginMode === true) {
      authObs = this.authService.onLogin(email, password)
    }
    if (!this.inLoginMode) {
      authObs = this.authService.onRegister(email, password)
    }

    authObs.subscribe(() => {
      this.isLoading = false
    }, error => {
      this.error = error
      this.turnOffSpinner()
    }, () => {
      if (this.inLoginMode) {
        this.confirmMessage = `Logged in`
        this.turnOffSpinner()
      } else {
        this.confirmMessage = `Registered successfully`
        this.turnOffSpinner()
      }
    });
  }

}
