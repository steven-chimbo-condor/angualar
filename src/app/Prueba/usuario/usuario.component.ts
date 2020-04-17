import { Component, OnInit } from '@angular/core';
import { cliente} from '../Models/Cliente';
import { ServicioService } from '../Servicios/servicio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public Usuarios:cliente={
    Nombre: null,
    Apellido: "",
    Cedula: "",
    Edad: "",
    Telefono: "",
    Direccion: ""
  }  
  public registro:any=[]
  public FormUsuario:FormGroup 
  public Datos:any=[]

  constructor(private servicio:ServicioService, private formbuilder:FormBuilder, private Ruta:Router) { 

    this.FormUsuario= this.formbuilder.group({
      Nombre: null,
      Apellido: "",
      Cedula: "",
      Edad: "",
      Telefono: "",
      Direccion: ""
     
    })
  }
  ngOnInit(): void {
    this.Usuario()
  }
  //metoto
  Usuario(){
    this.servicio.personas().subscribe(data=>{
      this.Datos=data
      console.log(data);
    })

  }
  CrearUsuario(){
    console.log(this.Usuarios);
    this.servicio.registroUsuario(this.Usuarios).subscribe(data=>{
      this.registro=data
      console.log(this.registro.length);
    })
  }


}
