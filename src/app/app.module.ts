import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendedorFormComponent } from './components/human-ss/vendedor/vendedor-form/vendedor-form.component';
import { VendedorComponent } from './components/human-ss/vendedor/vendedor/vendedor.component';
import { VendedorListComponent } from './components/human-ss/vendedor/vendedor-list/vendedor-list.component';
import { AdminComponent } from './components/admin-ss/admin/admin/admin.component';
import { AdminFormComponent } from './components/admin-ss/admin/admin-form/admin-form.component';
import { AdminListComponent } from './components/admin-ss/admin/admin-list/admin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    VendedorFormComponent,
    VendedorComponent,
    VendedorListComponent,
    AdminComponent,
    AdminFormComponent,
    AdminListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
