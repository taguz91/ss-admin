import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorListComponent } from './components/human-ss/vendedor/vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './components/human-ss/vendedor/vendedor-form/vendedor-form.component';
import { VendedorComponent } from './components/human-ss/vendedor/vendedor/vendedor.component';
import { VendedorUpdateComponent } from './components/human-ss/vendedor/vendedor-update/vendedor-update.component';
import { VendedorDeleteComponent } from './components/human-ss/vendedor-delete/vendedor-delete.component';


const routes: Routes = [
  {path:'vendedores/listar', component:VendedorListComponent},
  {path:'vendedores/insertar', component:VendedorComponent},
  {path:'vendedores/actualizar', component:VendedorUpdateComponent},
  {path:'vendedores/eliminar', component:VendedorDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
