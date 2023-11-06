import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceService } from 'src/service/service.service';
import { LoginService } from 'src/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public Login!: FormGroup;
  constructor(
    private https: HttpClient,
    private service: LoginService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    // UserName:[''],
    // Password:[''],
    // Emailaddress:[''],
    // Mobilenumber:['']
    this.Login = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobilenumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
    });
  }
  login() {
    console.log('clicked');
    // this.signup.reset();
    const body = {
      "username": this.Login.value.username,
      "password": this.Login.value.password,
      "mobilenumber": this.Login.value.mobilenumber,
      "email": this.Login.value.email,
      "firstname": "",
      "lastname": "",
    };
    console.log("data",body);
    this.service.login(body).subscribe((body: any) => {
      console.log('body', body);
    });
  }
}
