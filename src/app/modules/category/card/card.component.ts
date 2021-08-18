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

  @Input() category: Categories

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

  getBackgroudImage(url:string):string{
    return `url('http://localhost:9000/${url}')`;
  }
}
