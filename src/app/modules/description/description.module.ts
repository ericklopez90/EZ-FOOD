import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';
import { ProductComponent } from './product/product.component';
import { ShortcutModule } from '@components/shortcut/shortcut.module';


@NgModule({
  declarations: [
    DescriptionComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    DescriptionRoutingModule,
    ShortcutModule
  ]
})
export class DescriptionModule { }
