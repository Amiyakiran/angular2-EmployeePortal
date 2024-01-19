import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http:HttpClient) { }

  serverUrl ='https://employeeportal-server-1x5s.onrender.com'

  addUserDetails(user:UserModel){
   return this.http.post(`${this.serverUrl}/users`,user)
  }


  getallUsersApi(){
    return this.http.get(`${this.serverUrl}/users`)  
  }

  deleteuserApi(id:string){
    return this.http.delete(`${this.serverUrl}/users/${id}`)  

  }
  //view a user
  viewUserApi(id:any){
    return this.http.get(`${this.serverUrl}/users/${id}`) 
  }

  //update user
  updateuserApi(id:any,user:any){
    return this.http.put(`${this.serverUrl}/users/${id}`,user) 

  }
}
