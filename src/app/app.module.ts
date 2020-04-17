import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Prueba/login/login.component';

import {HttpClientModule}from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ChimboComponent } from './Prueba/chimbo/chimbo.component';
import { RegistroLoginComponent } from './Prueba/registo-login/registro-login.component';
import { UsuarioComponent } from './Prueba/usuario/usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChimboComponent,
    RegistroLoginComponent,
    UsuarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
