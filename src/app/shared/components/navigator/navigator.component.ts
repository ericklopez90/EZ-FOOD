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
  search = true;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnDestroy(): void { this.sub.unsubscribe(); }

  ngOnInit(): void {
    this.sub = this.store.select('orderState').subscribe(
      ( ({order}) => this.quantity = order.productsInOrder.length )
    );
  }

  viewSearch():void{
    console.log(this.search)
    if(!this.search){
      this.search = true
    } else {
      this.search = false
    }
    console.log(this.search)
  }

}