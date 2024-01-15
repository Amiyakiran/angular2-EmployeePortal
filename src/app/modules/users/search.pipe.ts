import { Pipe, PipeTransform } from '@angular/core';
/* :\Users\lumin\OneDrive\Documents\amiya\angular\employee-portal\src\app\modules\users>ng g p search */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
/* pipes are used to convert the user input and convert that into another formate. */
/* first argument which value to be changed , sec the based on which value the conetnt is changed */
  transform(allUsers:any[],searchKey:string): any[] {
    const result:any = []
    if(!allUsers || searchKey == ""){
      return allUsers;
    }
  
      allUsers.forEach((item:any)=>{
        if(item.name.trim().toLowerCase().includes(searchKey.trim().toLowerCase())){
          result.push(item)
        }
      })
    
    return result;
  }

}
