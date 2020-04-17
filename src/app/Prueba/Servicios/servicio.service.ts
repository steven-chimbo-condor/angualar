import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Login } from '../Models/Iniciar';
import { cliente} from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  

  constructor(private http:HttpClient) { }
  personas(){
    return this.http.get('http://localhost:3000/mostrar/todos')
  
  }
  editarPersona(edita:cliente){
    return this.http.post('http://localhost:3000/mostrar/editarPersonan', edita);
  }
  eliminarPersona(eliminar:cliente){
    return this.http.post('http://localhost:3000/mostrar/eliminarPersona', eliminar);
  }
  registroUsuario(crear :cliente){
    return this.http.post('http://localhost:3000/mostrar/crearPersona', crear);

  }


  enviarConsulta(login:Login){
    return this.http.post('http://localhost:3000/obtener/Login', login);

  }
 
  registroLogin(crarLogin :Login){
    return this.http.post('http://localhost:3000/obtener/crear', crarLogin);
  }
 
  

}
