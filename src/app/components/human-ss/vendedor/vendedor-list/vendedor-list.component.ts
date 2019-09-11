import { Component, OnInit } from '@angular/core';
import { Vendedor } from '../../../../models/human-ss/vendedor';
import { VendedorService } from '../../../../services/human-ss/vendedor/vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {

  vendedores:Vendedor[];

  constructor(private service:VendedorService, private router:Router) { }

  ngOnInit() {
    this.service.getVendedores()
    .subscribe(data=>{
      this.vendedores=data;
      
    })

    
  }

}
