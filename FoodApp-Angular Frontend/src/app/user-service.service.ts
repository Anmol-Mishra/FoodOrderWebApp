import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

export class User{
  username:string;
  phonenumber:string;
}


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  



  constructor(private http:HttpClient) { }


  checkIfUserRegistered(phoneNumber :string):Observable<any>{

 
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'text/plain',
      'Cache-Control': 'no-cache'
  }); 
  let options = {
  headers: httpHeaders
  }; 
    
     return this.http.post(`http://localhost:8080/checkIfRegisteredUser`, phoneNumber, options);
  }

  saveUserInDatabase(user : User):Observable<any>{
    return this.http.post(`http://localhost:8080/registerUser`, user);
  }



  getItems():Observable<any>{
    return this.http.get(`http://localhost:8080/getItems`);
  }
}
