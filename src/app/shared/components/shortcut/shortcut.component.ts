import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';

@Component({
  selector: 'shortcut',
  templateUrl: './shortcut.component.html',
  styleUrls: ['./shortcut.component.css']
})
export class ShortcutComponent {

  @Input() breadcrumbs: Breadcrumb [] = []

  constructor(
    private _router: Router ,
  ) { }

  ngOnInit(): void {
  }

  urlShort(data:string):void{
    this._router.navigateByUrl(`/${data}`);
  }

}