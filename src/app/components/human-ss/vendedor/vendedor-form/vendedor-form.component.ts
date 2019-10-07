import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { VendedorService } from 'src/app/services/human-ss/vendedor/vendedor.service';
import { TipoIdentificacionService } from 'src/app/services/human-ss/tipoIdentificacion/tipo_identificacion.service';
import { TipoIdentificacion } from 'src/app/models/human-ss/tipoIdentificacion';
import { Vendedor } from 'src/app/models/human-ss/vendedor/vendedor';

@Component({
  selector: 'app-vendedor-form',
  templateUrl: './vendedor-form.component.html',
  styleUrls: ['./vendedor-form.component.css']
})
export class VendedorFormComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  delete=false;
  
  tiposIdentificacion:TipoIdentificacion[];

  vendedor: Vendedor={
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
    
    if (window.history.state.delete){

      this.delete=window.history.state.delete;
      
    }else{
      this.delete=false;
    }

    
    if (window.history.state.id){
       
        this.editar();
        
        
    }

    this.service2.getTiposIdentificacion()
    .subscribe(data=>{
      this.tiposIdentificacion=data;
      
    })

    this.registerForm = this.formBuilder.group({
      tipoIdentificacion: [{value:'', disabled: this.delete}, Validators.required],
      identificacion: [{value:'', disabled: this.delete}, Validators.required],
      primerNombre: [{value:'', disabled: this.delete}, Validators.required],
      segundoNombre: [{value:'', disabled: this.delete}, Validators.required],
      primerApellido: [{value:'', disabled: this.delete}, Validators.required],
      segundoApellido: [{value:'', disabled: this.delete}, Validators.required],
      correoElectronico: [{value:'', disabled: this.delete}, Validators.required],
      sexo: [{value:'', disabled: this.delete}, Validators.required],
      nick: [{value:'', disabled: this.delete}, Validators.required],
      contrasena: [{value:'', disabled: this.delete}, Validators.required],
      maxProductos: [{value:'', disabled: this.delete}, Validators.required],
      
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

    enviar(vendedor:Vendedor){

      if (vendedor.id_persona){

        if (window.history.state.delete){
          this.eliminar(vendedor);
        }else{
          
          this.actualizar(vendedor);
        }
      }else{
        this.guardar();
      }
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

  editar(){
    console.log(this.vendedor);
    // let id_vendedor=localStorage.getItem("id_vendedor");
    // console.log(id_vendedor);
      this.service.getVendedoresId(+window.history.state.id)
      .subscribe(data=>{
        console.log(data);
        if (!this.delete)
          data.usuario.user_pass=null;
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
