import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interfaces/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: Subject<User | null> = new Subject();
  constructor(private usersService:UsersService) {
    this.loggedUser.next(null);
  }
  login(params: {email: string, password: string}): string {
    const {email, password} = params;
    const user = this.usersService.users.find(user=>user.email === email);
    if(!user){
      return "No such email";
    }
    if(user.password !== password){
      return "Password is incorrect";
    }
    this.loggedUser.next(user);
    localStorage.setItem("token",user.token);
    return "";
  }
}
