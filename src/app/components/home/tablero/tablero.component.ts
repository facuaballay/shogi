import { Component, OnInit } from '@angular/core';
import { TableroService } from '../../../services/tablero.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  matriz :Array<any>;

  constructor(public _TableroService:TableroService) { 

    this.matriz = _TableroService.CrearTablero();
  }

  ngOnInit() {
  }
}
