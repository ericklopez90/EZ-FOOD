import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealRoutingModule } from './meal-routing.module';
import { MealComponent } from './meal.component'
import { ShortcutModule } from '@components/shortcut/shortcut.module';
import { ListModule } from './list/list.module';


@NgModule({
  declarations: [
    MealComponent
  ],
  imports: [
    CommonModule,
    MealRoutingModule,
    ShortcutModule,
    ListModule
  ]
})
export class MealModule { }
