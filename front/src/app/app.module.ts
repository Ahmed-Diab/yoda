import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AppRoutingModule, routingComponant } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { AuthService } from './services/auth.service';
import { SocketService } from './services/socket.service';
import { HttpService } from './services/http.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatIconModule, MatGridListModule} from '@angular/material';
import { NavbarComponent } from './component/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponant,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatGridListModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [AuthService, SocketService, HttpService],
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
>>>>>>> e57f0722d52dff3a5b99e8baeca272b0397fda9d
  bootstrap: [AppComponent]
})
export class AppModule { }
