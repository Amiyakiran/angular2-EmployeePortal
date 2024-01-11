import { Component } from '@angular/core';
import { UserModel } from '../users.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    user:UserModel = {}
}
