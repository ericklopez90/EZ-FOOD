import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  HomeComponent
} from './home.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'category',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [{
        path: 'category',
        loadChildren: () => import('@modules/category/category.module')
          .then(m => m.CategoryModule)
      },
      {
        path: 'shop/:category',
        loadChildren: () => import('@modules/shop/shop.module')
          .then(m => m.ShopModule)
      },
      {
        path: 'order',
        loadChildren: () => import('@modules/order/order.module')
          .then(m => m.OrderModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('@modules/pay/pay.module')
          .then(m => m.PayModule)
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
