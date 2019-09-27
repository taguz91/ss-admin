import { Injectable } from '@angular/core';
import { Vendedor } from '../../../models/human-ss/vendedor/vendedor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http:HttpClient) { }

    Url="http://localhost:2020/api/v1/vendedores";

    getVendedores(){
      return this.http.get<Vendedor[]>(this.Url);
     
    }
    insertVendedor(vendedor:Vendedor){
      return this.http.post<Vendedor>(this.Url+"/insertar", vendedor);
     
    }

    getVendedoresId(id_vendedor:number) {
      return this.http.get<Vendedor>(this.Url+"/"+id_vendedor);
     
    }

    updateVendedor(vendedor:Vendedor){
      return this.http.put<Vendedor>(this.Url+"/actualizar/"+vendedor.id_usuario, vendedor);
     
    }
  
}
