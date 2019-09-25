import { Component, OnInit } from '@angular/core';
import { MarcaService } from 'src/app/services/producto-ss/marca/marca.service';
import { Marca } from 'src/app/models/producto-ss/producto/marca';

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
  mostrar = false;

  constructor( private marcaService:MarcaService ) { }

  ngOnInit() {

    this.marcaService.getAllMarcas().subscribe(
      data => {
        this.marcas = data;
        console.log(this.marcas);
      }
    );

  }

  guardarMarca(){
    console.log(this,this.marca);
    this.marcaService.saveMarca(this.marca).subscribe(
      data => {
        // this.marcas.push(this.marca);
        alert("Se guardó correctamente");
        this.marca.marc_nombre = "";
        this.marca.marc_codigo = "";
      }
    );
  }

  editarMarca( marca:Marca ){
    this.marca.id_marca = marca.id_marca;
    this.marca.marc_nombre = marca.marc_nombre;
    this.marca.marc_codigo = marca.marc_codigo;
    this.mostrar = true;
  }

}
