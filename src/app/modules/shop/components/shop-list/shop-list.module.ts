import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopListRoutingModule } from './shop-list-routing.module';
import { ShopListComponent } from './shop-list.component';
import { NavigatorModule } from '@components/navigator/navigator.module';
import { ProductsComponent } from './components/products/products.component';
import { ShortcutModule } from '@components/shortcut/shortcut.module';



@NgModule({
  declarations: [
    ShopListComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ShopListRoutingModule,
    NavigatorModule,
    ShortcutModule
  ]
})
export class ShopListModule { }
