import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';
import { Vendedor } from 'src/app/models/human-ss/vendedor';
import { VendedorService } from 'src/app/services/human-ss/vendedor/vendedor.service';
import { TipoIdentificacionService } from 'src/app/services/human-ss/tipoIdentificacion/tipo_identificacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})

export class VendedorComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
  tiposIdentificacion:TipoIdentificacion[];

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
      id_tipo_identificacion: 1
    },
    usuario: {
      id_usuario: 0,
      user_nick: '',
      user_pass: ''
    },
    vend_max_productos: 1
  };

  
    

  constructor(private router:Router, private service:VendedorService, private service2:TipoIdentificacionService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.service2.getTiposIdentificacion()
    .subscribe(data=>{
      this.tiposIdentificacion=data;
      
    })

    this.registerForm = this.formBuilder.group({
      tipoIdentificacion: ['', Validators.required],
      identificacion: ['', Validators.required],
      primerNombre: ['', Validators.required],
      segundoNombre: ['', Validators.required],
      primerApellido: ['', Validators.required],
      segundoApellido: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      sexo: ['', Validators.required],
      nick: ['', Validators.required],
      contrasena: ['', Validators.required],
      maxProductos: ['', Validators.required],
      
    });
  }


  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

  guardar(){

    if (this.submitted){
      console.log(this.vendedor);
      this.service.insertVendedor(this.vendedor)
      .subscribe(data=>{
        alert("Se agregó exitosamente");
        this.router.navigate(["vendedores/listar"]);
      })
    }
    
  }

}
