import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { updateProducts } from '@inner-store/actions';
import { AppState } from '@inner-store/app.reducers';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Product } from '@interfaces/product.interface';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  productsInOrder: ProductInOrder[];
  subs: Subscription;
  @Input() product: Product;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnDestroy(): void { this.subs.unsubscribe() }

  ngOnInit(): void {
    this.subs = this.store.select('orderState').subscribe(
      ({ order }) => this.productsInOrder = order.productsInOrder
    )
  }

  goProduct( id: number ): void {
    this.router.navigateByUrl(`meal/description/${id}`);
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
  showSuccess() {
    this.toastr.success('Se ha agregado correctamente');
  }

}
