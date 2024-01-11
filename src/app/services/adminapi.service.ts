import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {

  serverUrl ='http://localhost:3000'
  constructor(private http:HttpClient) { }

  authenticate(){
    //api call 
    console.log('inside authenticate function');
    return this.http.get(`${this.serverUrl}/users/1`)
    }
}
