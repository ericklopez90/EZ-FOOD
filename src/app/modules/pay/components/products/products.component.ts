import { Component, Input, OnInit } from '@angular/core';
import { ProductInOrder } from '@interfaces/product-in-order.interface';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class PayProductsComponent implements OnInit {

  @Input() order: ProductInOrder;
  constructor() { }

  ngOnInit(): void {
  }

}
