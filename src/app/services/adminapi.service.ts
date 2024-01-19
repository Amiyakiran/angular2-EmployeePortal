import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
/* ng g s services/adminapi */

@Injectable({
  providedIn: 'root'
})
export class AdminapiService {
 

  serverUrl ='http://localhost:3000'
  constructor(private http:HttpClient) { }
/* BehaviorSubject will allow components to subscribe and receive updates even if they are not present at the time the data is initially set.  */
/* null is the initial value */
  public sharedData = new BehaviorSubject(false);
  updatedata(data:any){
    /* next is used to access the new value */
    this.sharedData.next(data)
  }
  authenticate(){
    //api call 
    console.log('inside authenticate function');
    return this.http.get(`${this.serverUrl}/users/1`)
    }

    updateAdminapi(admin:any){
      return this.http.put(`${this.serverUrl}/users/1`,admin)
    }
}
