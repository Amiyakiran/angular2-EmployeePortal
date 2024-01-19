import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminapiService } from '../services/adminapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 islogin:any;
  constructor(private api:AdminapiService, private router:Router){
     
  }ngOnInit(): void {
    /* to access the value you can use subscribe method */
    this.api.sharedData.subscribe(data=>{
      console.log(data);
      
      this.islogin=data
    })
  }
  
  Logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("pswd")
   this.islogin=false
   this.router.navigateByUrl('')
  }
  
}
