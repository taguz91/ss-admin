import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../../../services/producto-ss/marca/marca.service';

@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.css']
})
export class MarcaFormComponent implements OnInit {

  constructor( private marcaservicio: MarcaService) { 
    

  }

  ngOnInit() {
  }

}
