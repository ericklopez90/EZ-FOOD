import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Breadcrumb
} from '@interfaces/breadcrumb.interface';
import {
  Subcategories
} from '@interfaces/subcategories.interface';
import {
  CategoriesService
} from '@services/categories.service';
import {
  SubcategoriesService
} from '@services/subcategories.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit, OnDestroy {


  subs: Subscription[] = []
  id!: string;
  subcategory: Subcategories[] = []
  breadcrumbs: Breadcrumb[] = [{
    name: '',
    url: '#',
  }, ];

  constructor(
    private categorie$: CategoriesService,
    private subcategorie$: SubcategoriesService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(
      (data: any) => this.id = data.category)
  }


  ngOnInit(): void {
    this.getSubcategory()
    this.getCategories()
  }

  ngOnDestroy():void{
    this.subs.map(s => s.unsubscribe())
  }

  getSubcategory() {
    const s = this.subcategorie$.fetchOne(this.id)
      .subscribe(({ payload }) => this.subcategory = payload)
      this.subs.push(s)
  }

  getCategories():void {
    const s = this.categorie$.getCategories()
      .subscribe(({payload}) => {
        const shortcut = payload.filter( payload => payload._id === this.id)
        this.breadcrumbs[0].name = shortcut.map( (s:any) => s.name).toString()
        this.breadcrumbs[0].url = 'javascript:void(0)'
        this.subs.push(s)
      })
  }

}
