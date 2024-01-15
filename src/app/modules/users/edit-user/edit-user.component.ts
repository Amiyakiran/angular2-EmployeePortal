import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserapiService } from '../userapi.service';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  user:UserModel={}

  constructor( private route:ActivatedRoute , private api:UserapiService, private router:Router){}
/* ActivatedRoute class is used to get data from url 
here we need id from the path */

ngOnInit(): void {
  /* to get the id at the time of page loading */
  this.route.params.subscribe((res:any)=>{
    //params is a property which returns observable 
    //there will be one response so using the call back => since we move only to this page when there is id in url
    console.log(res);
    const {id} = res

    //make api call for getting the details of a particular user having this id
     this.getExistingUser(id)
  })
}

getExistingUser(id:any){
  this.api.viewUserApi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.user=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
   })
  
}

//edit user
editUser(id:any){
  this.api.updateuserApi(id,this.user).subscribe({
    next:(res:any)=>{
      console.log(res);
      alert('user upadted successfully')
      this.router.navigateByUrl('/users')
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })
}
//cancel button
cancelUpadte(id:any){
  this.getExistingUser(id)
}

}

