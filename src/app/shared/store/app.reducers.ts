import { ActionReducerMap } from '@ngrx/store';
import * as reducers  from './reducers/index';


export interface AppState {
   orderState: reducers.OrderState
}



export const appReducers: ActionReducerMap<AppState> = {
   orderState: reducers.orderReducer
}
