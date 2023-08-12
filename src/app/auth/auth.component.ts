import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpManagmentService } from '../recipies/http-managment.service';
import { User } from '../user.mode';
import { AuthResponseData, AuthserviceService } from './authservice.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  inLoginMode: boolean = false;
  inputForm: FormGroup;
  email: string = ''
  isLoading: boolean = false;
  error: string = null;

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

  submitForm(data: FormGroup) {
    // this.error = null;
    this.isLoading = true;
    if (!this.inputForm.valid) {
      return;
    }

    const email = data.value.email
    const password = data.value.password

    if (this.inLoginMode === true) {
      return null
    }

    if (this.inLoginMode === false) {

      this.authService.onRegister(email, password)
        .subscribe(responseData => {
          console.log(responseData);
          this.isLoading = false;
        }, error => {
          console.log(error)
          this.isLoading = false;
          this.error = error.error.error.message
        });

    }

  }

}
