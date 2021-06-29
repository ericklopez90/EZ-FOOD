import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { Product } from '@interfaces/product.interface';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  realProducts: Product[] = [];

  products: Product[] = [
    {
      id: 1,
      category: 'postres',
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
      id: 2,
      category: 'cortes',
      name: 'Tomahawk a la sal Himalaya',
      price: 745,
      description: 'Uno de los cortes favoritos de todo buen parrillero es un delicioso Tomahawk. Este corte proviene del costillar de la res y es un filete grueso con costilla que cuenta con una gran cantidad de grasa intramuscular o marmoleo.',
      image: 'https://laroussecocina.mx/wp-content/uploads/2020/05/CarneGabo.jpg',
      ingredients: [
        { name: 'Tomahowk', mandatory: true, checked: true },
        { name: 'Sal del Himalaya', mandatory: true, checked: true },
        { name: 'Especias', mandatory: false, checked: true }
      ]
    },
    {
      id: 3,
      category: 'ensaladas',
      name: 'Ensalada de carambola',
      price: 125,
      description: ' La ensalada que os presentamos hoy tiene como ingrediente principal la carambola. Esta fruta, también conocida como “fruta estrella”, de entre 7 y 12 centímetros de longitud, es originaria de Indonesia y Malasia, aunque su cultivo se ha extendido a países de Asia y América',
      image: 'http://www.superama.com.mx/views/micrositio/recetas/images/verano/ensalada-de-carambola/Web_fotoreceta.jpg',
      ingredients: [
        { name: 'Lechuga italiana', mandatory: true, checked: true },
        { name: 'Espinaca Baby', mandatory: true, checked: true },
        { name: 'Carambola', mandatory: true, checked: true },
        { name: 'Mostaza Dijón', mandatory: false, checked: true },
        { name: 'Miel de abeja', mandatory: false, checked: true },
      ]
    }
  ];
  breadcrumbs: Breadcrumb[] = [
    {
      name:'',
      url:'',
    },
    {
      name:'',
      url:'#',
    },
  ];

  constructor( private route: ActivatedRoute ) {
    this.route.params.subscribe(
      ( data: any ) => this.realProducts = this.products.filter( product => product.id == data.id )
    )
  }
  ngOnInit(): void {
  this.breadCrumbs()
  }

  breadCrumbs(){
    this.breadcrumbs[0].name = this.realProducts[0].category
    this.breadcrumbs[0].url = `/meal/${this.realProducts[0].category}` 
    this.breadcrumbs[1].name = this.realProducts[0].name 
  }
}
