import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { ListItem } from 'src/app/interfaces/list-item';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {


  user$: Observable<User | null>;
  list$: Observable<ListItem[]>;



  constructor(private authService: AuthService) {
    this.user$ = this.authService.loggedUser;
    this.list$ = this.user$.pipe(map((v) => (v ? v.list : [])));
  }

  ngOnInit(): void {}







}
