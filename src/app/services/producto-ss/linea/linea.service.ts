import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LineaFormComponent } from 'src/app/components/producto-ss/lineas/linea-form/linea-form.component';
import { Linea } from 'src/app/models/producto-ss/producto/linea';

@Injectable({
  providedIn: 'root'
})
export class LineaService {

  url: string = "http://localhost:6060/api/v1/linea";

  constructor( private _http:HttpClient) { }

  getAllLineas(){
    return this._http.get<Linea[]>(this.url+"/");
  }

  saveLinea(linea:Linea){
    return this._http.post<Linea>(this.url+"/guardar",linea);
  }

  getLineaId(idLinea: number){

  }

  updateLinea(linea: Linea){
    return this._http.post<Linea>(this.url+"/guardar", linea);
  }

  deleteLinea(idLinea: number){
    this._http.delete(this.url+`/eliminar/${idLinea}`);
  }

}
