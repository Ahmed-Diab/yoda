import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule, components } from './user-routing.module';
import { SharedModule } from '../sharedModule/shared.module';
import { MatGridListModule,MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule,  } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './userComponent/post/post.component';
import { RemoveDialogComponent } from './userComponent/remove-dialog/remove-dialog.component';
import { EditDialogComponent } from './userComponent/edit-dialog/edit-dialog.component';
import { FindFrindComponent } from './userComponent/find-frind/find-frind.component';

@NgModule({
  declarations: [
    PostComponent,
    components,
    RemoveDialogComponent,
    EditDialogComponent,
    FindFrindComponent
  ],
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
    HttpClientModule,
    MatDialogModule,
    MatIconModule

    
  ],
  exports:[
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatIconModule
  ],
  entryComponents: [
    RemoveDialogComponent,
    EditDialogComponent,

],
})
export class UserModule { }
