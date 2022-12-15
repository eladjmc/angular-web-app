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
  addItemForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  displayedColumns = ['Task', 'Description', 'Actions'];
  user$: Observable<User | null>;
  list$: Observable<ListItem[]>;

  constructor(private authService: AuthService) {
    this.user$ = this.authService.loggedUser;
    this.list$ = this.user$.pipe(map((v) => (v ? v.list : [])));
  }

  ngOnInit(): void {}

  removeItem(email: string, listItem: ListItem) {
    this.authService.removeFromUserList(email, listItem);
  }

  onSubmit(email: string) {
    if (!this.addItemForm.valid) {
      return;
    }
    this.authService.addToUserList(email, this.addItemForm.value.description);
    this.addItemForm.reset();
    this.addItemForm.markAsPristine();
  }
}
