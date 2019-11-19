import { Component, OnInit } from '@angular/core';
import { TableroService } from '../../../services/tablero.service';
import { HelperFichasService } from '../../../services/helper/helper-fichas.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  lugar: string;
  ficha: any;
  fila: number;
  columna: number;
  filaEliminar: number;
  columnaEliminar: number;
  matriz: Array<any>;

  jugador :string;

  constructor(public _TableroService: TableroService,
              private _HelperFichaService: HelperFichasService) {
    this.matriz = _TableroService.CrearTablero();
  }

  ngOnInit() {
    this.jugador = 'jugador1';
  }
//========================================= lugar ============================================//
  onMover(ficha: string, lugar: string) {
    //devuelve un true
    let sePuede = this.sePuede(ficha, lugar);

    if (sePuede) {
      this.onEliminar();
      this.onLugar();

      switch (this.jugador) {
        case (this.jugador = "jugador1"):
          this.jugador = "jugador2";
          swal("Turno del Jugador 2",'','success');

          break;
        case (this.jugador = "jugador2"):
          this.jugador = "jugador1";
          swal("turno del jugador 1");
          break;
      }
    } else {
      swal('Movimiento No Permitido','','error')
    }
  }

  //verifica que se pueda mover en la direccion solicitada
  sePuede(ficha: string, lugar: string){
    //lugares futuros
    this.fila = Number(lugar.substr(0, 1));
    this.columna = Number(lugar.substr(1, 1));
    
    //comprovacion si existe la fila  
    let existe = this.onFicha(ficha);

    //si existe que ficha es?
    if(existe){
      switch (this.ficha.nombre){
        case "Peon":
          return this._HelperFichaService.peon(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
      }
    }
    return false;
  }

  //buscar la ficha comprueba si existe y setea variables
  onFicha(ficha: string): boolean {
    for (var f = 0; f < 9; f++) {
      for (var c = 0; c < 9; c++) {
        if (this.matriz[f][c].id === ficha && this.matriz[f][c].permiso === this.jugador) {
          this.filaEliminar = f;
          this.columnaEliminar = c;
          this.ficha = this.matriz[f][c];

          return true;
        }
      }
    }
    return false;
  }
  
  //mueve el lugar
  onLugar() {
    //peon
    if (this.ficha["nombre"] === "Peon") {
      this.peon();
    }
  }
  
  //elimina la ficha
  onEliminar(): void {
    this.matriz[this.filaEliminar][this.columnaEliminar] = { id: "", nombre: "" };
  }
 //============================================ fin logica lugar=============================================//

//============================================= logica fichas ===============================================//
  peon(){
    this.matriz[this.fila][this.columna] = this.ficha;

    if (this.ficha["permiso"] === "jugador1") {
      if (this.fila.valueOf() === 8) {
        this.ficha["nombre"] = "G.Oro";
        this.ficha["img"] = "assets/Fichas/Peon-promocionado.png";
      }
    }

    if (this.ficha["permiso"] === "jugador2") {
      if (this.fila.valueOf() === 0) {
        this.ficha["nombre"] = "G.Oro";
        this.ficha["img"] = "assets/Fichas/Peon-promocionado.png";
      }
    }
  }


  //========================================== fin logica fichas ====================================//
}
