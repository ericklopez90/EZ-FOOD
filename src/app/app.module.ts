import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app-routing-module';

import { AppComponent } from './app.component';
import { ShortcutComponent } from './shared/components/shortcut/shortcut.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortcutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
