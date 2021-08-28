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

  subs: Subscription[] = []
  id!: string
  realProducts: Product[]

  breadcrumbs: Breadcrumb[] = [{
      name: '',
      url: '#',
    },
    {
      name: '',
      url: '#',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private categorie$: CategoriesService,
    private subcategorie$: SubcategoriesService,
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
        this.realProducts = payload
        let w = this.realProducts[0].category
        let x = this.realProducts[0].subCategory
        if (x === this.id) {
          this.categorie$.getCategories()
            .subscribe(({
              payload
            }) => {
              const shortcutCat = payload.filter(payload => payload._id === w)
              this.breadcrumbs[0].name = shortcutCat.map((s: any) => s.name).toString()
              this.breadcrumbs[0].url = shortcutCat.map((s: any) => s._id).toString()
              this.subcategorie$.fetchOne(w)
                .subscribe(({
                  payload
                }) => {
                  const shortcutSub = payload.filter((payload: any) => payload._id === x)
                  this.breadcrumbs[1].name = shortcutSub.map((s: any) => s.name).toString()
                  this.breadcrumbs[1].url = shortcutSub.map((s: any) => s._id).toString()
                })
            })
        } else {
          this.categorie$.getCategories()
            .subscribe(({
              payload
            }) => {
              const shortcutCat = payload.filter(payload => payload._id === w)
              this.breadcrumbs.pop()
              this.breadcrumbs[0].name = shortcutCat.map((s: any) => s.name).toString()
            })
        }
      })
    this.subs.push(s)
  }
}