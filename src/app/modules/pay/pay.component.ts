import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppState } from '@inner-store/app.reducers';
import { Breadcrumb } from '@interfaces/breadcrumb.interface';
import { ProductInOrder } from '@interfaces/product-in-order.interface';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {

  total = parseFloat(localStorage.getItem('total'))
  orders: ProductInOrder[] = [];
  breadcrumbs: Breadcrumb[] = [
    {
      name:'Orden',
      url:'/order',
    },
    {
      name:'Pagar',
      url:'/checkout',
    },
  ];

  formCuentas: FormGroup = this.fb.group({
    percentage:[0,Validators.required],
    totalPropina: [0, Validators.required],
    totalPagar: [0, Validators.required],
    iva: [0, Validators.required]
  })

  constructor(
    private store: Store<AppState>,
    private fb : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getLocal()  
    this.store.select('orderState').subscribe(
      ({ order }) => this.orders = order.productsInOrder
    )
    this.getIva()
  }

  getLocal(){
    this.formCuentas.get('totalPagar').setValue(parseFloat(localStorage.getItem('total'))) 
  }

  propina(){
    const s = this.formCuentas.value.percentage
    const x = parseFloat(localStorage.getItem('total'))
    if( s === '1' ){
      this.formCuentas.get('totalPropina').setValue( x * .10 )
    } else if (s === '2'){
      this.formCuentas.get('totalPropina').setValue( x * .15 )
    } else if (s === '3'){
      this.formCuentas.get('totalPropina').setValue( x * .20 )
    }
  }

  getIva(){
    const s = this.formCuentas.get('totalPagar').value
    this.formCuentas.get('iva').setValue( s - s / 1.16 )
  }

  getTotal(){
    const s = this.formCuentas.value.percentage
    const q = this.formCuentas.value.totalPropina
    const y = parseFloat(localStorage.getItem('total'))
    if(s !== '0'){
      this.formCuentas.get('totalPagar').setValue( q + y )
    } else {
      this.formCuentas.get('totalPagar').setValue( y )
    }
  }
}
