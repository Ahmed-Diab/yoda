import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ErrorComponent } from './sharedComponent/error/error.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},

  {path:'', redirectTo:'login', pathMatch:'full'}

  // {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponant = [
  LoginComponent

]
