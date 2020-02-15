import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

import { AuthGuardUsers } from './_helpers/auth-user.guard';
const routes: Routes = [
  { path: 'admin', component: AdminPageComponent ,canActivate:[AuthGuardUsers],data : {role:'admin'}},
  { path: 'user', component: UserPageComponent , canActivate:[AuthGuardUsers],data : {role:'user'}},
  { path: '', component: LoginPageComponent },
  { path: '**', component: LoginPageComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
