import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { AdminapiService } from '../services/adminapi.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:string=""
  pswd:string =""

  constructor(private api:AdminapiService,private router:Router){}

  login(){
    if(!this.email && !this.pswd){
      Swal.fire({
        title: "Oops",
        text: "Please will the form completely",
        icon: "info"
      });

    }
    else{
      console.log('inside login function');
      
     this.api.authenticate().subscribe({
      /* POSITIVE RESPONSE 200 */
      next:(res:any)=>{
        console.log(res);
       const {email , password} = res
       if(email === this.email  && password ===this.pswd){
        //save admin details
        localStorage.setItem("name",res.name)
        localStorage.setItem("pswd",res.password)
        Swal.fire({
          title: "Wow",
          text: "Login Successful",
          icon: "success"
        });
      this.api.updatedata({d:true})
      
        //navigate
        this.router.navigateByUrl('dashboard')
       }
       else{
        Swal.fire({
          title: "Oops",
          text: "Login failed, invalid password or username",
          icon: "error"
        });
       }
        
      },
      /* negative response */
      error:(res:any)=>{
        console.log(res.message);
        
      }
  
     })
      

      
      
    }
  }
}
