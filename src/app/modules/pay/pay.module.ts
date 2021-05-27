import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayRoutingModule } from './pay-routing.module';
import { PayComponent } from './pay.component';

import { ProductsComponent } from './components/products/products.component';
import { GratuityComponent } from './components/gratuity/gratuity.component';
import { IVAComponent } from './components/iva/iva.component';
import { TotalComponent } from './components/total/total.component';
import { PerPersonComponent } from './components/per-person/per-person.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SplitAccountComponent } from './components/split-account/split-account.component';
import { ShortcutModule } from '@components/shortcut/shortcut.module';



@NgModule({
  declarations: [
    PayComponent,
    ProductsComponent,
    GratuityComponent,
    IVAComponent,
    TotalComponent,
    PerPersonComponent,
    PaymentMethodComponent,
    ButtonsComponent,
    SplitAccountComponent,
  ],
  imports: [
    CommonModule,
    PayRoutingModule,
    ShortcutModule
  ]
})
export class PayModule { }
