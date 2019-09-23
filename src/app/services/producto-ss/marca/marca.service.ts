import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marca} from 'src/app/models/producto-ss/marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  url: string = "http://localhost:6060/api/v1/marca";

  constructor() { }

  getAllMarcas(){
    return this._http-.get<Marca[]>(this.url+"/");
  }

  saveMarca(marca:Marca){
    return this._http.post<Marca>(this.url+"/guardar",marca);
  }

  getMarcaById(idMarca: number){

  }

  updateMarca(marca: Marca){
    return this._http.post<Marca>(this.url+"/guardar", marca);
  }

  deletea(idMarca
    : number){
    this._http.delete(this.url+`/eliminar/${idMarca}`);
  }


}
