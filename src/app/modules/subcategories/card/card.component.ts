import { Component, Input, OnInit } from '@angular/core';
import { Subcategories } from '@interfaces/subcategories.interface';




@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() subcategories: Subcategories[] = []

  constructor() { }

  ngOnInit(): void {
  }


}
