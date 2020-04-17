import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Servicios/servicio.service';
import { Login } from '../Models/Iniciar';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-login',
  templateUrl:'./registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit {

  public Personas:Login={
    Cedula: null,
    Contrasena:""
    
  }
  public login:any=[]
  public FormRegistroLogin:FormGroup 
  public Datos:any=[]

  constructor(private servicio:ServicioService, private formbuilder:FormBuilder, private Ruta:Router) { 

    this.FormRegistroLogin= this.formbuilder.group({
      Cedula:null,
      Contrasena:"",
     
    })
  }

  ngOnInit(): void {
    this.Persona()
  }
//metoto
  Persona(){
    this.servicio.personas().subscribe(data=>{
      this.Datos=data
      console.log(data);
    })

  }
  CrearLogin(){
    console.log(this.Personas);
    this.servicio.registroLogin(this.Personas).subscribe(data=>{
      this.login=data
      console.log(this.login.data);
    
    })
  }
  regreso(){
    this.Ruta.navigate(['Login'])

  } 
  Limpiar(from: FormGroup){

  }
}
