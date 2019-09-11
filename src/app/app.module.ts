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
import {FormsModule} from '@angular/forms';
import { VendedorService } from './services/human-ss/vendedor/vendedor.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    VendedorFormComponent,
    VendedorComponent,
    VendedorListComponent,
    AdminComponent,
    AdminFormComponent,
    AdminListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    VendedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
