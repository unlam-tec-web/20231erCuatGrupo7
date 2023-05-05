import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { LibrosComponent } from './componentes/libros/libros.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DescripcionProductoComponent } from './componentes/descripcion-producto/descripcion-producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    NavBarComponent,
    LibrosComponent,
    CarritoComponent,
    DescripcionProductoComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
