import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '@interfaces/categories.interface';
import { Router } from '@angular/router';
import { CategoriesService } from '@services/categories.service';
import { SubcategoriesService } from '@services/subcategories.service';
import { Subcategories } from '@interfaces/subcategories.interface';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() category: Categories

  subcategory: Subcategories[] = []
  get colors(){
    return this.categoriesService.colors
  }


  constructor(
    private router: Router,
    private categoriesService:CategoriesService,
    private subcategorie$: SubcategoriesService) { }

  ngOnInit(): void {
  }

  goCategory( category: Categories ): void {
    const s = this.subcategorie$.fetchOne(`${category._id}`)
    .subscribe(({ payload }) => {
      if (payload.length !== 0) {
        this.router.navigateByUrl(`${category._id}`.toLowerCase());
      }else{
        this.router.navigateByUrl(`meal/${category._id}`.toLowerCase())
      }} )
    
  }

  getBackgroudImage(url:string):string{
    return `url('http://localhost:9000/${url}')`;
  }
  
}
