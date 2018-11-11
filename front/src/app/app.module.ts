import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponant } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from './services/auth.service';
import { SocketService } from './services/socket.service';
import { HttpService } from './services/http.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatNativeDateModule,
  MatInputModule,
  MatIconModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatDatepickerModule} from '@angular/material';
import { FacebookModule, FacebookService } from 'ngx-facebook';

import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { SharedModule } from './sharedModule/shared.module';
import { PostComponent } from './userModule/userComponent/post/post.component';
import { CommentComponent } from './userModule/userComponent/post/comment/comment.component';
import { ReplayComponent } from './userModule/userComponent/post/comment/replay/replay.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponant,
    NavbarComponent,
    RegisterComponent,
    PostComponent,
    CommentComponent,
    ReplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    FacebookModule.forRoot(),
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSnackBarModule
  ],
  providers: [AuthService, SocketService, HttpService, FacebookService],
  bootstrap: [AppComponent]

})
export class AppModule { }
