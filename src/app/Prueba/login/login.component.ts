import { Component, OnInit } from '@angular/core';
import { ServicioService } from'../Servicios/servicio.service';
import { Login } from '../Models/Iniciar';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Personas:Login={
    Cedula: null,
    Contrasena:""
    
  }
  public login:any=[]
  public FormLogin:FormGroup 
  public Datos:any=[]

  //inicializo los componentes en el constructor

  constructor(private servicio:ServicioService, private formbuilder:FormBuilder, private Ruta:Router) { 

    this.FormLogin= this.formbuilder.group({
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
  EnviarDatos(){
    console.log(this.Personas);
    this.servicio.enviarConsulta(this.Personas).subscribe(data=>{
      this.login=data
      console.log(this.login.length);

      if(this.login.length==1){
        //navegar por las rutas
        this.Ruta.navigate(['Chimbo'])
      }
    })
  }
  getLogin(){
    this.Ruta.navigate(['Registro'])
  }
}
