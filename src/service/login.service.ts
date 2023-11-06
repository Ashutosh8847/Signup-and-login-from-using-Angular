import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  login(body:any)
  {
    return this.http.post('http://127.0.0.1:5000/post',body)
  }
}
