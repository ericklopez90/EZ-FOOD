import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '@interfaces/categories.interface';
import { Router } from '@angular/router';
import { CategoriesService } from '@services/categories.service';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() categories: Categories [] = []

  get colors(){
    return this.categoriesService.colors
  }

  constructor(
    private router: Router,
    private categoriesService:CategoriesService) { }

  ngOnInit(): void {
  }

  goCategory( category: Categories ): void {
      this.router.navigateByUrl(`${category._id}`.toLowerCase());
  }

  color(category:Categories):string{
    return this.colors.includes(category.bgColor)? 'text-dark':'text-white';
  }
}
