import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '@inner-store/app.reducers';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {

  products: ProductInOrder[] = [];
  subs: Subscription[] = [];
  breadcrumbs: Breadcrumb[] = [
  {
    name:'Orden',
    url:'/order',
  },
];

  constructor(
    private store: Store<AppState>,
    private toastr: ToastrService
  ) { }

  ngOnDestroy(): void { this.subs.map( s => s.unsubscribe() ); }

  ngOnInit(): void {
    const orderSub = this.store.select('orderState').subscribe(
     ( {order} ) => this.products = order.productsInOrder
    )
    this.subs.push( orderSub );
  }


  productCounter(): string {
    return this.products.length === 1 ?
    `1 producto` :
    `${ this.products.length } productos`;
  }

  getTotal(): number {
    return this.products.reduce(
      ( prev, curr) =>
      prev + (curr.product.price * curr.quantity),
      0 ) || 0;
  }

  showSuccess() {
    this.toastr.success('Se ha enviado a cocina correctamente');
  }

}

