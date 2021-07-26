import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubcategoriesRoutingModule } from './subcategories-routing.module';
import { SubcategoriesComponent } from './subcategories.component';
import { CardComponent } from './card/card.component';
import { ShortcutModule } from '@components/shortcut/shortcut.module';


@NgModule({
  declarations: [
    SubcategoriesComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SubcategoriesRoutingModule,
    ShortcutModule
  ]
})
export class SubcategoriesModule { }
