import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '@inner-store/app.reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit, OnDestroy {

  quantity = 0;
  sub: Subscription;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnDestroy(): void { this.sub.unsubscribe(); }

  ngOnInit(): void {
    this.sub = this.store.select('orderState').subscribe(
      ( ({order}) => this.quantity = order.productsInOrder.length )
    );

  }

}
