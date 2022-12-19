import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  user$ = this.authService.loggedUser;

  constructor(private router: Router, private authService:AuthService) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }
}
