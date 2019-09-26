import { Component, OnInit } from '@angular/core';
import { Unidad } from 'src/app/models/producto-ss/producto/unidad';
import { UnidadService } from 'src/app/services/producto-ss/unidad/unidad.service';

@Component({
  selector: 'app-unidad-form',
  templateUrl: './unidad-form.component.html',
  styleUrls: ['./unidad-form.component.css']
})
export class UnidadFormComponent implements OnInit {

  mostrar = false;
  unidades: Unidad[];
  unidad: Unidad = {
    unid_nombre: null,
    unid_codigo: null,
    unid_activo: true
  };

  constructor( private unidadService: UnidadService ) { }

  ngOnInit() {
    this.unidadService.getAllUnidades().subscribe(
      data => {
        this.unidades = data;
      }
    );
  }

  guardarUnidad(){
    console.log(this.unidad);
    this.unidadService.saveUnidad(this.unidad).subscribe(
      data =>{
        alert("Se guardó correctamente");
      }
    )
  }

  editarUnidad( unidad:Unidad ){
    console.log(this.unidad);
    this.unidad.id_unidad = unidad.id_unidad;
    this.unidad.unid_nombre = unidad.unid_nombre;
    this.unidad.unid_codigo = unidad.unid_codigo;
    this.mostrar = true;
  }

}
