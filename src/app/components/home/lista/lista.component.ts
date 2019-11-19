import { Component, OnInit } from '@angular/core';
import { TableroService } from '../../../services/tablero.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  lista;
  constructor(public _TableroService:TableroService) { 
    this.lista = _TableroService.fichas;

  }

  ngOnInit() {
  }

}
