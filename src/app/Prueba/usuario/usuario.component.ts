import { Component, OnInit } from '@angular/core';
import { cliente} from '../Models/Cliente';
import { ServicioService } from '../Servicios/servicio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario',
  templateUrl:'./usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public Usuarios:cliente={
    _id:null,
    dni:"",
    names:"",
    email:"",
    phone:"",
    direccion:"",
    genero:""
  }  
  public registro:any=[]
  public FormUsuario:FormGroup 
  public Datos:any=[]
  public datospersona:any=[]

  constructor(private servicio:ServicioService, private formbuilder:FormBuilder, private Ruta:Router) { 

    this.FormUsuario= this.formbuilder.group({
    _id:null,
    dni:"",
    names:"",
    email:"",
    phone:"",
    direccion:"",
    genero:""
     
    })
  }
  ngOnInit(): void {
    this.Usuario()
    this.obtener()
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
      this.obtener()
    })
  }
  EditarPersona(){
    this.servicio.editarPersona(this.Usuarios).subscribe(data=>{
      this.registro=data
      console.log(this.registro.length);
      this.obtener()
    })

  }
  eliminarPersona(){
    this.servicio.eliminarPersona(this.Usuarios).subscribe(data=>{
      this.registro=data
      console.log(this.registro.length);
      this.obtener()
    })
  }
  obtener(){
    this.servicio.personas().subscribe(data=>{
      this.datospersona=data
    })
  }
  guardaryeliminar(){
    if(this.Usuarios._id==null){
      this.CrearUsuario()
    }else{
      this.EditarPersona()
    }
  }
  editar(){
    this.servicio.editarPersona(this.Usuarios).subscribe(()=>{
      this.obtener()
    })
  }
  delete(persona){
    this.servicio.eliminarPersona(persona).subscribe(data=>{
      this.obtener();
    })
    
  }
}
