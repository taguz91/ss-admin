import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendedorService } from 'src/app/services/human-ss/vendedor/vendedor.service';
import { TipoIdentificacionService } from 'src/app/services/human-ss/tipoIdentificacion/tipo_identificacion.service';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';
import { Vendedor } from 'src/app/models/human-ss/vendedor';

@Component({
  selector: 'app-vendedor-delete',
  templateUrl: './vendedor-delete.component.html',
  styleUrls: ['./vendedor-delete.component.css']
})
export class VendedorDeleteComponent implements OnInit {

  tiposIdentificacion:TipoIdentificacion[]

  vendedor:Vendedor={
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
    },
    usuario: {
      id_usuario: 0,
      user_nick: '',
      user_pass: ''
    },
    vend_max_productos: 0
  };
  
  constructor(private router:Router, private service:VendedorService, private service2:TipoIdentificacionService ) { }

  ngOnInit() {
    this.cargar();
    this.service2.getTiposIdentificacion()
    .subscribe(data=>{
      this.tiposIdentificacion=data;
      
    })
  }

   cargar(){
    console.log(this.vendedor);
    let id_vendedor=localStorage.getItem("id_vendedor");
    console.log(id_vendedor);
      this.service.getVendedoresId(+id_vendedor)
      .subscribe(data=>{
        console.log(data);
        this.vendedor=data;
      })
  }

  eliminar(vendedor:Vendedor){
    vendedor.per_activo=false;
    vendedor.usuario.user_activo=false;
    vendedor.vend_activo=false;
    this.service.deleteVendedor(vendedor)
    .subscribe(data=>{
      this.vendedor=data;
      alert("Se eliminó exitosamente");
      this.router.navigate(["vendedores/listar"]);
    })
  }

}
