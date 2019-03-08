import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from 'src/modelos/empleado';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
    
  empleados: Empleado[];

  constructor(private http: HttpClient) { }

  traerEmpleados(){
    return this.http.get('http://localhost:3000/api/validacion');   
  }
}
