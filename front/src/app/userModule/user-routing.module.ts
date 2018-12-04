import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './userComponent/home/home.component';
import { NotificationsComponent } from './userComponent/notifications/notifications.component';
import { FriendsRequstsComponent } from './userComponent/friends-requsts/friends-requsts.component';
import { SinglePostComponent } from './userComponent/single-post/single-post.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'friends-requsts', component: FriendsRequstsComponent},
  {path: 'post/:id', component: SinglePostComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
export const components = [
  HomeComponent
];
