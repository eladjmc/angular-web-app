import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminUserListComponent } from './components/admin-user-list/admin-user-list.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminAuthGuard } from './guards/admin-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'personal-info',
        component: PersonalInfoComponent,
      },
      {
        path: 'admin-panel',
        canActivate: [AdminAuthGuard],
        //canActivateChild: [AdminAuthGuard],
        component: AdminPanelComponent,
      },
      {
        path: 'admin-panel/:id',
        canActivate: [AdminAuthGuard],
        component: AdminUserListComponent,
      },
    ]
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
