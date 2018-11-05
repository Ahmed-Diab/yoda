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
import {MatButtonModule, MatInputModule, MatIconModule, MatGridListModule, MatFormFieldModule} from '@angular/material';

import { NavbarComponent } from './component/navbar/navbar.component';
import { RegisterComponent } from './component/register/register.component';
import { SharedModule } from './sharedComponent/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    routingComponant,
    NavbarComponent,
    RegisterComponent,
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
    MatFormFieldModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [AuthService, SocketService, HttpService],
  bootstrap: [AppComponent]

})
export class AppModule { }
