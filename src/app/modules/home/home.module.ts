import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavigatorModule } from '@components/navigator/navigator.module';
import { ShortcutModule } from '@components/shortcut/shortcut.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NavigatorModule,
    ShortcutModule
  ]
})
export class HomeModule { }
