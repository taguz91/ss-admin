import { Component, OnInit, Input } from '@angular/core';
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
  @Input() lineaInput:Linea;

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

  editarLinea( linea:Linea ){
    this.linea.id_linea = linea.id_linea;
    this.linea.lin_nombre = linea.lin_nombre;
    this.linea.lin_codigo = linea.lin_codigo;
    this.mostrar = true;
  }

  eliminarLinea(){

  }

}
