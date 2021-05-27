import { Component, } from '@angular/core';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  breadcrumbs: Breadcrumb[] = [
    {
      name:'Postres',
      url:'/shop',
    },
    {
      name:'Browie de chocolate',
      url:'/shop/single',
    },
  ];

  constructor() { }


}
