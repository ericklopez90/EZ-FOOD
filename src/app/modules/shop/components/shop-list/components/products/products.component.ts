import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { updateProducts } from '@inner-store/actions';
import { AppState } from '@inner-store/app.reducers';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Product } from '@interfaces/product.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  productsInOrder: ProductInOrder[];
  subs: Subscription;
  @Input() product: Product;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnDestroy(): void { this.subs.unsubscribe() }

  ngOnInit(): void {
    this.subs = this.store.select('orderState').subscribe(
      ({ order }) => this.productsInOrder = order.productsInOrder
    )
  }

  addToOrder( product: Product ): void {
    const ordered: ProductInOrder[] = [
    ...this.productsInOrder,
    {
      customer: 'Betinho',
      addedAt: new Date(),
      product,
      status: 'onTable',
      quantity: 1
    }]
    this.store.dispatch( updateProducts( { productsInOrder: ordered } ) )
  }

}
