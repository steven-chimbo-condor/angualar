import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Prueba/login/login.component';
import { ChimboComponent } from './Prueba/chimbo/chimbo.component';
import { RegistroLoginComponent } from './Prueba/registo-login/registro-login.component';
import {UsuarioComponent}from './Prueba/usuario/usuario.component';
import {TableComponent}from './Prueba/table/table.component';

//creo la ruta despues de crar un nuevo componente 
const routes: Routes = [
  //ruta del login
  {path:"Login", component:LoginComponent},
  {path:'Chimbo',component:ChimboComponent},
  {path:'Registro',component:RegistroLoginComponent},
  {path:'UserRegistro',component:UsuarioComponent},
  {path:'Table',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
