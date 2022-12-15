import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, tap } from 'rxjs';
import { ListItem } from '../interfaces/list-item';
import { User } from '../interfaces/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser: ReplaySubject<User | null> = new ReplaySubject();
  constructor(private usersService: UsersService) {
    this.loggedUser.next(null);
  }
  login(params: { email: string; password: string }): string {
    const { email, password } = params;
    const user = this.usersService.users.find((user) => user.email === email);
    if (!user) {
      return 'No such email';
    }
    if (user.password !== password) {
      return 'Password is incorrect';
    }
    this.loggedUser.next(user);
    localStorage.setItem('token', user.token);
    return '';
  }
  addToUserList(userEmail: string, description: string) {
    const user = this.usersService.getUserByEmail(userEmail);
    if (!user) {
      return;
    }
    user.list.push({ description });
    this.loggedUser.next(user);
  }
  removeFromUserList(userEmail: string, description: ListItem) {
    const user = this.usersService.getUserByEmail(userEmail);
    if (!user) {
      return;
    }
    const newList = user.list.filter((listItem) => {
      return listItem !== description;
    });
    user.list = newList;
    this.loggedUser.next(user);
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const user = this.usersService.users.find((user) => user.token === token);
    if (!user) {
      return;
    }
    this.loggedUser.next(user);
  }
}
