import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from 'src/app/interfaces/list-item';
import { Role, User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  user$: Observable<User | null>;
  constructor(private authService:AuthService) {
    this.user$= authService.loggedUser;
   }

  ngOnInit(): void {
  }

  userType(role:Role){
    if(!role){
      return;
    }
    if(role === 'user'){
      return 'Regular user'
    }
    if(role==='admin'){
      return 'Admin user'
    }
    return;
  }


}
