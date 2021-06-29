import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { ProductComponent } from './components/product/product.component';
import { ShortcutModule } from '@components/shortcut/shortcut.module';

@NgModule({
  declarations: [
    OrderComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ShortcutModule
  ]
})
export class OrderModule { }
