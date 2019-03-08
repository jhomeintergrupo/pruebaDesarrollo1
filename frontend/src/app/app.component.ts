import { Component, OnInit } from '@angular/core';


import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from 'src/modelos/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmpleadoService]
})
export class AppComponent implements OnInit {

  constructor( private empleadoService: EmpleadoService){
  }

  ngOnInit() {
    this.getEmpleados();    
  }
  
  title = 'frontend';

  mostrar = true;


  getEmpleados(){
    this.empleadoService.traerEmpleados()
    .subscribe(res => {
      this.empleadoService.empleados = res as Empleado[];
      console.log(res);
    })
  }

  validarCedula( cedula:string, horaingreso:string ){
    this.mostrar = !this.mostrar
    
    console.log(cedula, horaingreso)
  }

}
