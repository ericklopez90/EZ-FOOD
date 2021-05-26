import { Component, Input, OnInit } from '@angular/core';
import { deleteProduct } from '@inner-store/actions';
import { AppState } from '@inner-store/app.reducers';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() ordered: ProductInOrder;
  @Input() index: number;
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
  }


  deleteProduct(): void {
    this.store.dispatch( deleteProduct( {index: this.index} ) );
  }

  getAgo( date: any ): string {
    const now: any  = new Date();
    const diff      = date - now;
    const minutes   = Math.abs(
      Math.round(
        ( ( diff % 86400000 ) % 3600000 ) / 60000 )
    );
    if ( minutes === 0 ) {
      return 'un momento';
    } else if ( minutes === 1 ) {
      return `${ minutes } minuto`;
    } else {
      return `${ minutes } minutos`;
    }
  }

  withOutIngredients(): string {
    const ingredients = this.ordered.product.ingredients;
    const without     = ingredients
    .filter( ing => !ing.checked )
    .map( ing => ing.name )
    .join(', ');
    return without;
  }

  getStatus(): string {
    const map: any = {
      onTable: 'Agregado a la orden',
      onKitchen: 'Enviado a cocina',
      onBar: 'En la barra',
      deliveried: 'Entregado'
    }
    const status = this.ordered.status;
    return map[ status ];
  }

}
