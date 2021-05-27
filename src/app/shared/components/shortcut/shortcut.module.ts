import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortcutComponent } from './shortcut.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShortcutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ShortcutComponent]
})
export class ShortcutModule { }