import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ErrorComponent } from './sharedModule/error/error.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, data: {animation: 'login'}, canActivate: [LoginGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full', data: {animation: 'login'}, canActivate: [LoginGuard]},
  {path: 'register', component: RegisterComponent, data: {animation: 'register'}, canActivate: [LoginGuard]},
  {path: 'user', loadChildren: './userModule/user.module#UserModule', data: {animation: 'register'}, canActivate: [AuthGuard]},

  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponant = [
  LoginComponent,
  RegisterComponent
];
