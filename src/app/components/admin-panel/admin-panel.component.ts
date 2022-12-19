import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  users:User[] =[]
  displayedColumns = ['Name', 'Email', 'Age', 'Action'];

  constructor(private userService:UsersService) {
    this.users=userService.users;
   }

  ngOnInit(): void {
  }


}
