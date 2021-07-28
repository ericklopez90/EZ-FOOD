import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductInOrder } from '@interfaces/product-in-order.interface';

@Component({
  selector: 'pay-method',
  templateUrl: './pay-method.component.html',
  styleUrls: ['./pay-method.component.css']
})
export class PayMethodComponent implements OnInit {

  tip = new FormControl('0');
  @Input() total = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getIva(): number {
    return this.total * 0.16;
  }

  getTip(): number {
    return ( Number(this.tip.value) / 100 ) * this.total;
  }

  totalPay(): number {
    return this.getIva() + this.getTip() + this.total;
  }



}
