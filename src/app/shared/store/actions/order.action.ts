import { Order } from '@interfaces/order.interface';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { createAction, props } from '@ngrx/store';

const prefix = '[Order]';

export const getOrder = createAction(
  `${ prefix } Obtener order`
);

export const setOrder = createAction(
  `${ prefix } setOrder`,
  props<{ order: ProductInOrder }>()
);

export const deleteProduct = createAction(
  `${ prefix } Eliminar producto`,
  props<{ index: number }>()
);

export const updateProducts = createAction(
  `${ prefix } Actualizar productos`,
  props<{ productsInOrder: ProductInOrder[] }>()
)
