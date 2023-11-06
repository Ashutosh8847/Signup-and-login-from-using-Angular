import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }



  postuser(body:any):Observable<any>{
    return this.http.post("http://127.0.0.1:5000/post",body)
  }

  getuser(body:any):Observable<any>{
  return this.http.post("http://127.0.0.1:5000/post",body)
}

  
}


  

