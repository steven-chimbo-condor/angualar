import { Component, OnInit } from '@angular/core';
import {  Vehiculo} from '../Models/Vehiculo';
import { ServicioService } from '../Servicios/servicio.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public Usuarios:Vehiculo={
    _id:null,
    Placa:"",
    Modelo:"",
    Color:"",
    Marca:"",
    id_person:"",
    nombre:""
  }  
  public registro:any=[]
  public FormVehiculo:FormGroup 
  public Datos:any=[]
  public carro:any=[]

  constructor(private servicio:ServicioService, private formbuilder:FormBuilder, private Ruta:Router) { 

    this.FormVehiculo= this.formbuilder.group({
    _id:null,
    Placa:"",
    Modelo:"",
    Color:"",
    Marca:"",
    id_person:"",
    nombre:""
     
    })
  }
  ngOnInit(): void {
    //carge la pantalla cuando inicia
    this.Usuario();
    this.obtener();
    
  }
  //metoto
  Usuario(){
    this.servicio.todosCliente().subscribe(data=>{
      this.Datos=data
      console.log(data);
    })

  }
  CrearVehiculo(){
    this.servicio.crearVehiculo(this.Usuarios).subscribe(data=>{
      console.log(data)
      this.obtener()
    })
    console.log(this.Usuarios)
  }
  obtener(){
    this.servicio.listarVehiculo().subscribe(data=>{
      
      this.carro=data
    })
  }
  datosCarro(lista,i){
    this.Usuarios=Object.assign({},lista)
  }
  eliminarCarro(lista,i){ 
    this.servicio.eliminarCarro(lista).subscribe(()=>{
      this.obtener()
      console.log(lista)
      
    })
    
     
  }
  guardaryactualizar(){
    if(this.Usuarios._id==null){
      this.CrearVehiculo()
    }else{
      this.editarCarro()
    }
  }
  editarCarro(){
    this.servicio.editarCarro(this.Usuarios).subscribe(()=>{
      this.obtener()
    })

  }
  /*
  Mostrar(){
    console.log(this.Usuarios);
    this.servicio.MostarDatos(this.Usuarios).subscribe(data=>{
      this.registro=data
      console.log(this.registro.length);
      if(this.Usuario.length ==1){
        this.Mostrar();
      }
    })
  }
  */
}
