import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../Servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chimbo',
  templateUrl: './chimbo.component.html',
  styleUrls: ['./chimbo.component.css']
})
export class ChimboComponent implements OnInit {
  

  constructor(private servicio:ServicioService, private Ruta:Router) { 

    
  }
  ngOnInit(): void {
    
  }
  //metoto
  ReguistroUser(){
    this.Ruta.navigate(['UserRegistro'])
  }
  

}
