import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { Product } from '@interfaces/product.interface';
import { CategoriesService } from '@services/categories.service';
import { MealsService } from '@services/meals.service';
import { SubcategoriesService } from '@services/subcategories.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  subs: Subscription[] = []
  id!:string;
  realProducts: Product[] = [];
  breadcrumbs: Breadcrumb[] = [
    {
      name:'',
      url:'',
    },
    {
      name:'',
      url:'#',
    },
    {
      name:'',
      url:'#',
    },
  ];

  constructor( 
    private route: ActivatedRoute,
    private meal$: MealsService,
    private categorie$: CategoriesService,
    private subcategorie$: SubcategoriesService

    ) {
    this.route.params.subscribe(
      ( data: any ) => this.id = data.id
    )
  }
  ngOnInit(): void {
  this.getMeals()
  }

  getMeals(): void {
    const s = this.meal$.fetch(this.id)
      .subscribe(({
        payload
      }) => {
        this.realProducts = payload
        let w = this.realProducts[0].category
        let x = this.realProducts[0].subCategory
        let z = this.realProducts[0]._id
        if(x!=='60ff43e0b82d9e7dc8e6cd66'){    
          if (z === this.id) {
            this.breadcrumbs[2].url = `javascript:void(0)`
            this.breadcrumbs[2].name = this.realProducts[0].name
            this.breadcrumbs[1].url = `meal/${x}`
            console.log(this.breadcrumbs[2].url)
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
                  })
              })}
        } else {
          if (z === this.id) {
            this.breadcrumbs.pop()
            this.breadcrumbs[1].url = `javascript:void(0)`
            this.breadcrumbs[1].name = this.realProducts[0].name
            this.breadcrumbs[0].url = `meal/${x}`
            this.categorie$.getCategories()
              .subscribe(({
                payload
              }) => {
                const shortcutCat = payload.filter(payload => payload._id === w)
                this.breadcrumbs[0].name = shortcutCat.map((s: any) => s.name).toString()
        })}}
    this.subs.push(s)
  })}
}
