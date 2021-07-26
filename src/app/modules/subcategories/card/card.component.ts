import { Component, Input, OnInit } from '@angular/core';
import { Subcategories } from '@interfaces/subcategories.interface';


@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() subcategories: Subcategories[] = []

//  get colors(){
   // return this.categoriesService.colors
 // }

  constructor() { }

  ngOnInit(): void {
  }

//  color(subcategory:Subcategories){
//    if (this.colors.includes(subcategory.backgroundColor)){
//      return 'text-dark'
//    } else {return 'text-white'}
//  }

}
