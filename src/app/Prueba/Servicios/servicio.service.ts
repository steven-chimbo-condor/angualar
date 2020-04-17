import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from '../Models/Iniciar';
import { cliente} from '../Models/Cliente';
import { Vehiculo } from '../Models/Vehiculo';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http:HttpClient) { }
  personas(){
    return this.http.get('http://localhost:3000/obtener/')
  
  }
  enviarConsulta(login:Login){
    return this.http.post('http://localhost:3000/obtener/Login', login);

  }
  registroUsuario(crear :cliente){
    return this.http.post('http://localhost:3000/mostrar/crear', crear);

  }
  registroLogin(crarLogin :Login){
    return this.http.post('http://localhost:3000/obtener/crear', crarLogin);
  }
  MostarDatos(table :cliente){
    return this.http.post('http://localhost:3000/mostrar/mostar', table);

  }
  listarVehiculo(){
    return this.http.get('http://localhost:3000/ver/all');
  }
  crearVehiculo(carro: Vehiculo){
    return this.http.post('http://localhost:3000/ver/crear', carro);
  }
  todosCliente(){
    return this.http.get('http://localhost:3000/mostrar/')
  
  }
  eliminarCarro(carro: Vehiculo){
    return this.http.post('http://localhost:3000/ver/eliminar', carro);
  
  }
  editarCarro(carro: Vehiculo){
    return this.http.post('http://localhost:3000/ver/editar', carro);
  
  }

}
