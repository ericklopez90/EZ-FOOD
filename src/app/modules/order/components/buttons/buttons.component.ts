import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { Router } from '@angular/router'

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent  {

  constructor(private router:Router) { }

  sendKitchen():void {

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Gracias!',
      html: 
      'tu orden a sido enviada a cocina <br><br>' +
      '<b>Orden</b> B1C2 <br><br>' +
      '<b>Mesero</b> suaberto',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ir a menú principal',
      showConfirmButton: true,
      showCloseButton: true,

    }).then((result)=>{
      if (result.isConfirmed){
        this.router.navigateByUrl("category")
      }
    })
  }

}
