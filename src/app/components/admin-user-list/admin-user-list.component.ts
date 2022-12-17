import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  user$: Observable<User | undefined>;

  constructor(
    private route:ActivatedRoute,
    private usersService:UsersService
  ) {
    this.user$ =this.route.paramMap.pipe(
        // tap(params => console.log(params)),
        // map(_ => this.usersService.users[0]),
        switchMap((paramMap) => {
          const id = paramMap.get("id")
          if (!id) {
            return of(undefined)
          }
          return of(this.usersService.users.find(user => user.id === +id))
        })
    )
  }

  ngOnInit(): void {
  }

}
