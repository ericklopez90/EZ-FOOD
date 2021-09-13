import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Breadcrumb
} from '@interfaces/breadcrumb.interface';
import {
  Product
} from '@interfaces/product.interface';
import {
  CategoriesService
} from '@services/categories.service';
import {
  MealsService
} from '@services/meals.service';
import {
  SubcategoriesService
} from '@services/subcategories.service';
import {
  Subscription
} from 'rxjs';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit, OnDestroy {

  subs: Subscription[] = [];
  id!: string;
  realProducts: Product[];
  bread=false;
  breadcrumbs: Breadcrumb[] = [];

  constructor(
    private route: ActivatedRoute,
    private meal$: MealsService
  ) {
    this.route.params.subscribe(
      (data: any) => this.id = data.id)

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe())
  }

  ngOnInit(): void {
    this.getMeals();
  }

  getMeals(): void {
    const s = this.meal$.fetch(this.id)
      .subscribe(({
        payload
      }) => {
        this.realProducts = payload //realizar que si no trae platillos se mande el breadcrumbs en blanco meterle un if aqui abajo
        if(this.realProducts.length !== 0){
          let w:any = this.realProducts[0].category
          let x:any = this.realProducts[0].subCategory
          let z = this.realProducts[0].name
          if(x){
            this.breadcrumbs.push({'name':w.name || '', 'url':w._id})
            this.breadcrumbs.push({'name':x.name || '', 'url':`meal/${x._id}`})
          }else{
            this.breadcrumbs.push({'name':w.name || '', 'url':`meal/${w._id}`})
            this.bread = true
          }
        } else {
          this.breadcrumbs[0].name = 'javascript:void(0)',
          this.breadcrumbs[0].url = 'javascript:void(0)'
        }
    this.subs.push(s)
  })
}
}