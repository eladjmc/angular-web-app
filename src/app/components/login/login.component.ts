import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('eladjmc@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('135791', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.errorMessage = this.auth.login(this.loginForm.value);
    if (!this.errorMessage) {
      this.router.navigate(['list']);
    }
  }
}
