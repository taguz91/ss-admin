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

  constructor() { }

  ngOnInit() {
  }

}
