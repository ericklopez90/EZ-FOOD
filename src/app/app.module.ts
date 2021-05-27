import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app-routing-module';

import { AppComponent } from './app.component';
import { ShortcutComponent } from './shared/components/shortcut/shortcut.component';

import { StoreModule } from '@ngrx/store';
import { appReducers } from '@inner-store/app.reducers';
import { StoreDevtoolsModule, StoreDevtoolsOptions } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const storeDevTools: StoreDevtoolsOptions = {
  maxAge: 25,
  logOnly: environment.production
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument( storeDevTools )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
