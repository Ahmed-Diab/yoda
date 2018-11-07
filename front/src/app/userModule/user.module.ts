import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule, components } from './user-routing.module';
import { SharedModule } from '../sharedModule/shared.module';
import { MatGridListModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,  } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
    
  ],
  declarations: [components],
  exports:[
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class UserModule { }
