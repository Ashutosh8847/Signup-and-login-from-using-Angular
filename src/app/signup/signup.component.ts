import { HttpClient, HttpHeaders, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { Router } from '@angular/router';
import { ServiceService } from 'src/service/service.service';
import { SignupService } from 'src/service/signup.service';






@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
   signupForm !: FormGroup
 
  
  constructor(private http:HttpClient, private service:SignupService,private fb:FormBuilder) { }



  ngOnInit(): void {

    this.signupForm=this.fb.group({
      'firstname':new FormControl('', Validators.required),
      'lastname':new FormControl('', Validators.required),
      'email':new FormControl('', Validators.email),
      'password':new FormControl('', Validators.required),

       'mobilenumber':new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
        })
  }
  Signup(){
    console.log('clicked')
    
    
    const body={
      "username":this.signupForm.value.firstname +' '+ this.signupForm.value.lastname,
      "password":this.signupForm.value.password,
      "mobilenumber":this.signupForm.value.mobilenumber,
      "email":this.signupForm.value.email,
      "firstname":this.signupForm.value.firstname,
      "lastname":this.signupForm.value.lastname
      }
  


  console.log("data",body)
  

      this.service.Signup(body).subscribe((body: any)=>{
           console.log("body",body);
 
      })
  


   
  }
  
  

}
