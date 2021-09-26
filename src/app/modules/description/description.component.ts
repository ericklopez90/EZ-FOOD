import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { Product } from '@interfaces/product.interface';
import { MealsService } from '@services/meals.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  subs: Subscription[] = [];
  id!:string;
  realProducts: Product;
  breadcrumbs: Breadcrumb[] = [];

  constructor( 
    private route: ActivatedRoute,
    private meal$: MealsService,
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
        this.realProducts = payload[0]
        let w:any = this.realProducts.category
        let x:any = this.realProducts.subCategory
        let z = this.realProducts.name
        if(x){
          this.breadcrumbs.push({'name':w.name, 'url':w._id})
          this.breadcrumbs.push({'name':x.name, 'url':`meal/${x._id}`})
          this.breadcrumbs.push({'name':z, 'url':'javascript:void(0)'})
        }else{
          this.breadcrumbs.push({'name':w.name, 'url':`meal/${w._id}`})
          this.breadcrumbs.push({'name':z, 'url':'javascript:void(0)'})
        }
    this.subs.push(s)
  })}
}
