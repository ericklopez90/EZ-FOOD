import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '@services/categories.service';
import { Categories } from '@interfaces/categories.interface';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categories: Categories[] = []
  subs: Subscription[] = []

  constructor(
    private categoriesServices: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategorys()
  }

  ngOnDestroy():void{
    this.subs.map(s => s.unsubscribe())
  }

  getCategorys():void{
    const s = this.categoriesServices.getCategories()
    .subscribe(resp => {
     this.categories = resp.payload
      this.subs.push(s)
    })
  }

}
