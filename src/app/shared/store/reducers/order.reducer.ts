import { createReducer, on } from '@ngrx/store';
import { deleteProduct, getOrder, updateProducts } from '@inner-store/actions/index';
import { Order } from '@interfaces/order.interface';

export interface OrderState {
  loading: boolean;
  error: null | any;
  order: Order
}

export const initialState: OrderState = {
  loading: false,
  error: null,
  order: {
    orderId: 1,
    productsInOrder: []
  }

}

const reducer = createReducer(initialState,

    on( getOrder, state => ( { ...state } ) ),
    on( deleteProduct, (state , {index}) => {
      const filter = state.order.productsInOrder.filter( ( v, i) => i !== index );
      return {
        ...state,
        order: {
          ... state.order,
          productsInOrder: filter
        }
      };
    }),
    on( updateProducts, ( state, { productsInOrder } ) => ({
      ...state,
      order: {
        ... state.order,
        productsInOrder: productsInOrder
      }
    }) ),

);

export function orderReducer(state: OrderState, action: any) {
    return reducer(state, action);
}
