import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = () => {
  /* ng g g guards/auth
   CanActivate
   create auth service*/
   /* inject is used to dependency inject the service class but cannot use the constructor since guard is not a class its a function */
   const authstatus = inject(AuthService)
   const router = inject(Router)
   if(authstatus.isloggined()){
    return true;
   }else{
    Swal.fire({
      title: "Oops",
      text: "operation denied please login",
      icon: "info"
    });
    router.navigateByUrl("")

    return false
   }
  
};
