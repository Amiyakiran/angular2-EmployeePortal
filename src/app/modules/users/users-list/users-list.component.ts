import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
 allUsers:UserModel[]=[]
 adminloginTime :any = new Date

searchKey:string=""

  constructor(private api:UserapiService){}

  ngOnInit(): void {
   
    
    this.getallUsers()
  }
 

  
  getallUsers(){
    this.api.getallUsersApi().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allUsers=res
        
      },
      error:(err:any)=>{
         console.log(err);
         
      }
    })
  }

  removeUser(id:any){
    this.api.deleteuserApi(id).subscribe({
      next:(res:any)=>{
        console.log(res);
        alert(`deletion successful`)
        this.getallUsers()
        
      },
      error:(err:any)=>{
         console.log(err);
         
      }
    }) 
  }
}
