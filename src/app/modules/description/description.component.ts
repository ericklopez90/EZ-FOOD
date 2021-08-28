import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { Product } from '@interfaces/product.interface';
import { MealsService } from '@services/meals.service';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

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
  ];

  constructor( 
    private route: ActivatedRoute,
    private meal$: MealsService
    ) {
    this.route.params.subscribe(
      ( data: any ) => this.id = data.id
    )
  }
  ngOnInit(): void {
  this.getMeals()
  }

  getMeals():void{
    this.meal$.fetch(this.id)
    .subscribe(({payload}) => {
      console.log(payload)
      this.realProducts = payload});
  }
  getBreadcrumbs(){
    console.log(this.realProducts)
  }
}
