import { Injectable } from '@angular/core';
import { Role, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [
    {
      token: 'blalbla',
      lastName: 'Harel',
      firstName: 'Elad',
      id: 1,
      age: 18,
      email: 'eladjmc@gmail.com',
      role: Role.USER,
      list: [
        {
          description:"Walk my dog"
        },
        {
          description:"Eat food"
        }
      ],
      password: '135791',
    },
    {
      token: 'blalbla2',
      lastName: 'Avinoam',
      firstName: 'Jerry',
      id: 2,
      age: 19,
      email: 'eladjmc88@gmail.com',
      role: Role.ADMIN,
      list: [],
      password: '135791',
    },
  ];
  constructor() {}

  addUser(user: User) {
    if (!user.id) {
      user.id = this.users.length;
      user.list = [];
    }
    this.users.push(user);
  }
  removeItemFromUserList() {}
  isUserExist(email: string) {
    const user = this.users.find((user) => user.email === email);
    return !!user;
  }

  setUserList(userToSet:User){
    const userToChange = this.users.find((user)=> user.email===userToSet.email);
    if(!userToChange){
      return;
    }
    userToChange.list = userToSet.list;
  }

  getUserByEmail(email:string){
    return this.users.find((user)=> user.email === email);

  }
}
