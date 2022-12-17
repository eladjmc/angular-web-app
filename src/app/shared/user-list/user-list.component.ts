import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListItem } from 'src/app/interfaces/list-item';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() user!: User;

  addItemForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });
  editItemForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });
  isEditing = false;

  displayedColumns = ['Task', 'Description', 'Actions'];
  editItemIndex = -1;
  savedListItem: ListItem = { description: '' };

  constructor(private authService:AuthService) {

  }


  onSubmit(email: string) {
    if (!this.addItemForm.valid) {
      return;
    }
    this.authService.addToUserList(email, this.addItemForm.value.description);
    this.addItemForm.reset();
    this.addItemForm.get("description")?.setErrors(null)
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.editItemForm.reset();
    }
    this.editItemIndex = -1;

  }

  removeItem(email: string, listItem: ListItem) {
    this.authService.removeFromUserList(email, listItem);
  }

  editItem(editItemIndex: number, listItem: ListItem) {
    this.toggleEdit();
    this.editItemIndex = editItemIndex;
    this.editItemForm.get('description')?.setValue(listItem.description);
    this.savedListItem=listItem;
  }


  onSubmitEdit(email:string) {
    const newListItem = this.editItemForm.value; //{'description':this.editItemForm.get('description')?.value};
    if(!newListItem){
      return;
    }
    this.authService.editItemInUserList(email,this.savedListItem,newListItem);
    this.toggleEdit();
  }

  ngOnInit(): void {}
}
