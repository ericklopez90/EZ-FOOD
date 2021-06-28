import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
    ]
  },
  {
    path: 'list',
    loadChildren: () => import('@modules/shop/components/shop-list/shop-list.module')
      .then(m => m.ShopListModule)
  },
  {
    path: 'single',
    loadChildren: () => import('@modules/shop/components/single/single.module')
      .then(m => m.SingleModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
