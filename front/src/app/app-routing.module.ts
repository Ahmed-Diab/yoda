import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
// import { ErrorComponent } from './sharedComponent/error/error.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},

  {path:'', redirectTo:'login', pathMatch:'full'}

  // {path:'**', component:ErrorComponent}
=======
import { ErrorComponent } from './sharedComponent/error/error.component';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},

  {path:'**', component:ErrorComponent}
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponant = [
<<<<<<< HEAD
  LoginComponent
=======


>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d

]
