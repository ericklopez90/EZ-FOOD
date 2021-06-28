import { Component } from '@angular/core';
import { AppState } from '@inner-store/app.reducers';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  orders: ProductInOrder[] = [];

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


  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('orderState').subscribe(
      ({ order }) => this.orders = order.productsInOrder
    )
  }

}
