import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendedorService } from '../../../../services/human-ss/vendedor/vendedor.service';
import { Vendedor } from '../../../../models/human-ss/vendedor';


@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {

  vendedor:Vendedor={
    id_usuario: 0,
    persona: {
      id_persona: 0,
      per_correo: '',
      per_identificacion: '',
      per_primer_apellido: '',
      per_primer_nombre: '',
      per_segundo_apellido: '',
      per_segundo_nombre: '',
      per_sexo: '',
      tipoIdentificacion: {
        id_tipo_identificacion: 0
      }
    },
    user_nick: '',
    user_pass: '',
    vend_max_productos: 0
  };

  constructor(private router:Router, private service:VendedorService) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.vendedor);
      this.service.insertVendedor(this.vendedor)
      .subscribe(data=>{
        alert("Se agregó exitosamente");
        this.router.navigate(["vendedores/listar"]);
      })
  }
}
