import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendedorListComponent } from './components/human-ss/vendedor/vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from './components/human-ss/vendedor/vendedor-form/vendedor-form.component';


const routes: Routes = [
  {path:'vendedores/listar', component:VendedorListComponent},
  {path:'vendedores/insertar', component:VendedorFormComponent},
  {path:'vendedores/actualizar', component:VendedorFormComponent},
  {path:'vendedores/eliminar', component:VendedorFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
