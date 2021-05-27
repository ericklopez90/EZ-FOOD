import { Component, Input } from '@angular/core';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';

@Component({
  selector: 'shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent {

  @Input() breadcrumbs: Breadcrumb [] = []

  constructor() { }

  ngOnInit(): void {
  }
}