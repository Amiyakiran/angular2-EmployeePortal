import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isloggined(){
    /* !! indicate to convert the statement into boolean */
   return !!localStorage.getItem("name")
  }
}
