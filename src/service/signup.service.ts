import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  Signup(body:any)
{
  return this.http.post('http://127.0.0.1:5000/post',body)

}
signed()
{
  return this.http.get('http://127.0.0.1:5000/get')

}


}
  



