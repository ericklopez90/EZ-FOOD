import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import {
  Categories
} from '@interfaces/categories.interface';
import { Subcategories } from '@interfaces/subcategories.interface';
import { CategoriesService } from '@services/categories.service';


@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {

  category: Categories[] = []
  subcategory: Subcategories[] = []

  get categorys() {
    return this.categoriesService.getCategories
  }

  breadcrumbs: Breadcrumb[] = [
    {
      name:'',
      url:'#',
    },
  ];

  constructor(private categoriesService: CategoriesService,
    private route: ActivatedRoute) {
    this.route.params.subscribe(
    //  (data: any) => this.category = this.categorys.filter(categories => categories.name.toLowerCase() === data.category)
    )
  }

  

  ngOnInit(): void {
    console.log(this.route.params)
    console.log(this.category)
    this.subcategory = this.category[0].subcategories
    this.breadcrumbs[0].name = this.category[0].name
    console.log(this.subcategory)
  }

}
