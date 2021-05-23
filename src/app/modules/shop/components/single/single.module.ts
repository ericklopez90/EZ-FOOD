import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRoutingModule } from './single-routing.module';
import { NavigatorModule } from '@components/navigator/navigator.module';
import { SingleComponent } from './single.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TextComponent } from './components/text/text.component';


@NgModule({
  declarations: [
    SingleComponent,
    CarouselComponent,
    CheckboxComponent,
    TextAreaComponent,
    ButtonsComponent,
    TextComponent
  ],
  imports: [
    CommonModule,
    SingleRoutingModule,
    NavigatorModule,
    
  ]
})
export class SingleModule { }
