import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpManagmentService } from '../recipies/http-managment.service';
import { User } from '../user.mode';
import { AuthserviceService } from './authservice.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  inLoginMode: boolean = false;
  inputForm: FormGroup;
  email: string = ''
  userData: User;

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
    this.userData = new User(this.inputForm.get('email').value, this.inputForm.get('password').value)

    this.authService.onRegister(this.userData).subscribe();
    this.inputForm.reset()
  }

}
