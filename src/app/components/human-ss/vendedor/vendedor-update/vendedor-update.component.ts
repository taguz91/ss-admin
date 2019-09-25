import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendedorService } from '../../../../services/human-ss/vendedor/vendedor.service';
import { Vendedor } from 'src/app/models/human-ss/vendedor/vendedor';

@Component({
  selector: 'app-vendedor-update',
  templateUrl: './vendedor-update.component.html',
  styleUrls: ['./vendedor-update.component.css']
})
export class VendedorUpdateComponent implements OnInit {
  
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
      per_sexo: ''
    
    },
    user_nick: '',
    user_pass: '',
    vend_max_productos: 0
  };
  
  constructor(private router:Router, private service:VendedorService ) { }

  ngOnInit() {
    this.editar();
  }

  editar(){
    console.log(this.vendedor);
    let id_vendedor=localStorage.getItem("id_vendedor");
    console.log(id_vendedor);
      this.service.getVendedoresId(+id_vendedor)
      .subscribe(data=>{
        console.log(data);
        this.vendedor=data;
      })
  }

  actualizar(vendedor:Vendedor){
    this.service.updateVendedor(vendedor)
    .subscribe(data=>{
      this.vendedor=data;
      alert("Se actualizó exitosamente");
      this.router.navigate(["vendedores/listar"]);
    })
  }

}
