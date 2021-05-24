import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavigatorComponent]
})
export class NavigatorModule { }
