import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subcategories } from '@interfaces/subcategories.interface';




@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() subcategory: Subcategories

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getBackgroudImage(url:string):string{
    return `url('${url}')`;
  }

  goSubcategory( subcategory:Subcategories):void{
    this.router.navigateByUrl(`meal/${subcategory._id}`.toLowerCase());
  }
}
