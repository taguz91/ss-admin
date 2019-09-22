import { Component, OnInit } from '@angular/core';
import { LineaService } from 'src/app/services/producto-ss/linea/linea.service';
import { Linea } from 'src/app/models/producto-ss/linea';

@Component({
  selector: 'app-linea-form',
  templateUrl: './linea-form.component.html',
  styleUrls: ['./linea-form.component.css']
})
export class LineaFormComponent implements OnInit {

  mostrar = false;
  lineas: Linea[];
  linea:Linea = {
    lin_nombre: null,
    lin_codigo: null,
    lin_activo: true
  };

  constructor( private lineaService: LineaService ) { 

  }

  ngOnInit() {
    this.lineaService.getAllLineas().subscribe(
      data => {
        this.lineas = data;
      }
    )
  }

  guardarLinea(){
    console.log(this.linea);
    this.lineaService.saveLinea(this.linea).subscribe(
      data =>{
        alert("Se guardó correctamente");
      }
    )
  }

  editarLinea(){

  }

  eliminarLinea(){

  }

}
