import { Component, Input} from '@angular/core';
import { updateProducts } from '@inner-store/actions';
import { AppState } from '@inner-store/app.reducers';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Product } from '@interfaces/product.interface';
import { Store } from '@ngrx/store';
import { Select } from '@interfaces/select-product.interface';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {


  selects: Select [] = [
    { value: 1, number: 1 },
    { value: 2, number: 2 },
    { value: 3, number: 3 },
    { value: 4, number: 4 },
    { value: 5, number: 5 },
  ]
  @Input() product: Product;
  productsInOrder: ProductInOrder[];

  breadcrumbs: Breadcrumb[] = [
    {
      name:'Postres',
      url:'/shop',
    },
    {
      name:'Browie de chocolate',
      url:'/shop/single',
    },
  ];

  constructor(
    private store: Store<AppState>,
  ) { }

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

