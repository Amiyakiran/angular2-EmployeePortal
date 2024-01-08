import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=""
  pswd:string =""

  login(){
    if(!this.email || !this.pswd){
      Swal.fire({
        title: "Oops",
        text: "Please will the form completely",
        icon: "info"
      });
    }
    else{
      Swal.fire({
        title: "Wow",
        text: "Login Successful",
        icon: "success"
      });
    }
  }
}
