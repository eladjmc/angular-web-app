import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegistered=false
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    age: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
  });

  constructor(private users:UsersService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isRegistered = false;
    if (!this.registerForm.valid) {
      return;
    }
    if (this.users.isUserExist(this.registerForm.value.email)){
      return;
    }
    this.users.addUser(this.registerForm.value);
    this.isRegistered = true;
  }
}
