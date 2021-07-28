import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';

import { PayProductsComponent } from './components/products/products.component';

import { ShortcutModule } from '@components/shortcut/shortcut.module';
import { PayMethodComponent } from './components/pay-method/pay-method.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PayComponent,
    PayProductsComponent,
    PayMethodComponent,
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    ShortcutModule,
    ReactiveFormsModule
  ]
})
export class PayModule { }
