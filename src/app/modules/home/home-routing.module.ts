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
        path: ':category',
        loadChildren: () => import('@modules/subcategories/subcategories.module')
          .then(m => m.SubcategoriesModule)
      },
      {
        path: 'meal/:category',
        loadChildren: () => import('@modules/meal/meal.module')
          .then(m => m.MealModule)
      },
      {
        path: 'meal/description/:id',
        loadChildren: () => import('@modules/description/description.module')
          .then(m => m.DescriptionModule)
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
