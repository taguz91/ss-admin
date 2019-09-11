import { Injectable } from '@angular/core';
import { Vendedor } from '../../../models/human-ss/vendedor';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http:HttpClient) { }

    Url="http://localhost:2020/api/v1/vendedores";

    getVendedores(){
      return this.http.get<Vendedor[]>(this.Url);
     
    }
  
}
