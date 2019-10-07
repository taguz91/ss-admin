import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorListComponent } from './components/human-ss/vendedor/vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './components/human-ss/vendedor/vendedor-form/vendedor-form.component';
import { VendedorComponent } from './components/human-ss/vendedor/vendedor/vendedor.component';
import { UnidadFormComponent } from './components/producto-ss/unidad/unidad-form/unidad-form.component';
import { MarcaFormComponent } from './components/producto-ss/marca/marca-form/marca-form.component';
import { LineaFormComponent } from './components/producto-ss/lineas/linea-form/linea-form.component';


const routes: Routes = [
  {path:'vendedores/listar', component:VendedorListComponent},
  {path:'vendedores/insertar', component:VendedorFormComponent},
  {path:'vendedores/actualizar', component:VendedorFormComponent},
  {path:'vendedores/eliminar', component:VendedorFormComponent},
  {path:'unidades', component:UnidadFormComponent},
  {path:'marcas', component:MarcaFormComponent},
  {path:'lineas', component:LineaFormComponent},
  {path:'vendedores', component:VendedorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
