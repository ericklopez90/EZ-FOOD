import { Component, OnInit } from '@angular/core';
import { Product } from '@interfaces/product.interface';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {

  products: Product[] = [
    {
      name: 'Browie de chocolate',
      price: 174,
      description: 'Dulce de azúcar sin harina, postre de pastel de chocolate, azúcar moreno empacado, comida, horneando',
      image: 'assets/img/shop/products/postre1.png',
      ingredients: [
        { name: 'Chocolate amargo', mandatory: true, checked: true },
        { name: 'Pan suave', mandatory: true, checked: true },
        { name: 'Azúcar glass', mandatory: false, checked: true }
      ]
    },
    {
      name: 'Pay de nuez',
      price: 125,
      description: 'El pay de nuez es una receta fácil y clásica, hecha con una mantequillosa y quebradiza masa, nueces tostadas y miel de Maple.',
      image: 'https://www.vidactual.com/rcpmaker/wp-content/uploads/2020/06/PieNuez-1.jpg',
      ingredients: [
        { name: 'Nueces', mandatory: true, checked: true },
        { name: 'Base de galleta', mandatory: true, checked: true },
        { name: 'Mantequilla', mandatory: true, checked: true },
        { name: 'Miel de maple', mandatory: false, checked: true },
        { name: 'Cajeta', mandatory: false, checked: true },
      ]
    }
  ];

  breadcrumbs: Breadcrumb[] = [
    {
      name:'Postres',
      url:'/shop',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
