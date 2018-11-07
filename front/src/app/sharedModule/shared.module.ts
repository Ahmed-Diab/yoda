import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';

const components = [
  ErrorComponent
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...components],
  exports:[...components]
})
export class SharedModule { }
