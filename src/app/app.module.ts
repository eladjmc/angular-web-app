import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotLoggedComponent } from './layouts/not-logged/not-logged.component';
import { LoggedComponent } from './layouts/logged/logged.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { UserListComponent } from './shared/user-list/user-list.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';




@NgModule({
  declarations: [
    AppComponent,
    NotLoggedComponent,
    LoggedComponent,
    RegisterComponent,
    LoginComponent,
    ListComponent,
    NavbarComponent,
    PersonalInfoComponent,
    UserListComponent,
    AdminUserListComponent,
    AdminPanelComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
