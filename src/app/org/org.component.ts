import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // mensaje de alerta
    msgAlert(nombre : string){
      Swal.fire({
        title: 'Nice!',
        text: 'Hola ' + nombre,
        icon: 'success',
        confirmButtonText: 'Cool'
      })  
    }


}
