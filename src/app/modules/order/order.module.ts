import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProductCounterComponent } from './components/product-counter/product-counter.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';




@NgModule({
  declarations: [
    OrderComponent,
    ProductComponent,
    ButtonsComponent,
    ProductCounterComponent,
    SubtotalComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
  ]
})
export class OrderModule { }
