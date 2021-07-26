import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '@services/categories.service';
import { Categories } from '@interfaces/categories.interface';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Categories[] = []

  constructor(
    private categoriesServices: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getCategorys()
  }

  getCategorys(){
    this.categoriesServices.getCategories()
    .subscribe(resp => {
     this.categories = resp.payload
      console.log(resp.payload)
    })

  }

}
