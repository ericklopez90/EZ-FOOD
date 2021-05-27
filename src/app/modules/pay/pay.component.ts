import { Component } from '@angular/core';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  breadcrumbs: Breadcrumb[] = [
    {
      name:'Orden',
      url:'/order',
    },
    {
      name:'Pagar',
      url:'/checkout',
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
