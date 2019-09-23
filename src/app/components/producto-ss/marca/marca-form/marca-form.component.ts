import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/producto-ss/marca/marca.service';
import { Marca } from 'src/app/models/producto-ss/marca';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css']
})
export class MarcaFormComponent implements OnInit {

  marcas: Marca[];
  marca:Marca = {
    marc_nombre: "",
    marc_codigo: "",
    marc_activo: true
  }

  constructor( private marcaService:MarcaService ) { }

  ngOnInit() {

    this.marcaService.getAllMarcas().subscribe(
      data => {
        this.marcas = data;
      }
    );

  }

  guardarMarca(){
    console.log(this,this.marca);
    this.marcaService.saveMarca(this.marca).subscribe(
      data => {
        alert("Se guardó correctamente");
      }
    );
  }

}
