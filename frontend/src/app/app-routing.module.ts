import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import {CarritoComponent} from "./componentes/carrito/carrito.component";
import { DescripcionProductoComponent } from './componentes/descripcion-producto/descripcion-producto.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ComicsComponent } from './componentes/comics/comics.component';
import {AgregarComponent} from './componentes/agregar/agregar.component';
import {LibrosComponent} from './componentes/libros/libros.component';
import {MangasComponent} from './componentes/mangas/mangas.component';
import{ SignupComponent } from './componentes/signup/signup.component';
import{ SigninComponent } from './componentes/signin/signin.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Inicio', component: InicioComponent },
  { path: 'Carrito', component: CarritoComponent },
  { path: 'DescripcionProducto/:id', component: DescripcionProductoComponent },
  { path: 'Login',component: LoginComponent},
  { path: 'Registrarse',component: RegistroComponent},
  { path: 'Comics', component: ComicsComponent },
  { path: 'Libros', component: LibrosComponent },
  { path: 'Mangas', component: MangasComponent },
  { path: 'CrearProducto', component: AgregarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
