import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import { DescripcionProductoComponent } from './componentes/descripcion-producto/descripcion-producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ComicsComponent } from './componentes/comics/comics.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Carrito', component: CarritoComponent },
  { path: 'DescripcionProducto', component: DescripcionProductoComponent },
  { path: 'Login',component: LoginComponent},
  { path: 'Registrarse',component: RegistroComponent},
  { path: 'Comics', component: ComicsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
