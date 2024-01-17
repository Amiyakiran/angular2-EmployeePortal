import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../userapi.service';
import { UserModel } from '../users.model';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  /* pagination */
  p: number = 1;
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

  sortById(){
    this.allUsers.sort((a:any,b:any)=>a.id-b.id)
  }
  sortByName(){
    /* The localeCompare() method compares two strings in the current locale.

The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
string.localeCompare(compareString) */
    this.allUsers.sort((a:any,b:any)=>a.name.localeCompare(b.name))
  }

  /* https://www.npmjs.com/package/jspdf */
  /* npm install jspdf jspdf-autotable */

  generatePDF(){
    //create an object for jspdf
    let pdf = new jsPDF() 

    let head = [['id','username','Email','Status']]

    let body :any = []

    this.allUsers.forEach((item:any)=>{
      /* since body should be nested array */
      body.push([item.id,item.name,item.email,item.active])
    })

    pdf.setFontSize(16)
    /* heading */
    pdf.text("All Users List",10,10)
    /* table */
    autoTable(pdf,{head,body})
    /* to open in new tab */
    pdf.output('dataurlnewwindow')
     /* save and download */
    pdf.save('allusers.pdf')
  }

  /* for pagination - npm install ngx-pagination --save */
}
