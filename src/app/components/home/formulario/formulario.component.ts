import { Component, OnInit } from '@angular/core';
import { TableroService } from '../../../services/tablero.service';
import { HelperFichasService } from '../../../services/helper/helper-fichas.service';
import swal from 'sweetalert';
import { HelperPromocionesService } from '../../../services/helper/helper-promociones.service';




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
  promocionado;

  constructor(public _TableroService: TableroService,
              private _HelperFichaService: HelperFichasService,
              public _HelperPromocionService:HelperPromocionesService) {
    
    this.matriz = _TableroService.CrearTablero();
    console.log(this.matriz)
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
          
          break;
        case (this.jugador = "jugador2"):
          this.jugador = "jugador1";
          
          break;
      }
    } else {
     swal('Movimiento No Permitido','','error')
    }
  }
//============================================================================================================//
//Verifica que se pueda mover en la direccion solicitada
//============================================================================================================//
  
  sePuede(ficha: string, lugar: string){
    //lugares futuros
    this.fila = Number(lugar.substr(0, 1));
    this.columna = Number(lugar.substr(1, 1));
    
    //comprobacion si existe la fila  
    let existe = this.onFicha(ficha);
    //si existe que ficha es?
    if(existe){
      switch (this.ficha.nombre){
        case "Peon":
         return this._HelperFichaService.peon(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
    
        case "G.Oro":
        return this._HelperFichaService.GeneralOro(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
        
        case "G.Plata":
        return this._HelperFichaService.GeneralPlata(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
        
        case "Lancero":
        return this._HelperFichaService.Lancero(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);

        case "Caballo":
        return this._HelperFichaService.Caballo(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);

        case "Rey":
          return this._HelperFichaService.Rey(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
        
        case "Alfil":
        return this._HelperFichaService.Alfil(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);

        case "AlfilPromocionado":
        return this._HelperFichaService.AlfilPromocionado(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
        
        case "Torre":
        return this._HelperFichaService.Torre(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
        
        case "TorrePromocionada":
        return this._HelperFichaService.TorrePromocionada(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador);
      }
    }
    return false;
  }
//============================================================================================================//
//Busca si existe la ficha
//============================================================================================================//
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
//============================================================================================================//
//Mueve Lugar
//============================================================================================================//
  onLugar() {
  
    switch(this.ficha["nombre"]){
      case "Peon":
        this.peon()
      break;
      case "G.Oro":
        this.GeneralOro()
        break;
      case "G.Plata":
        this.GeneralPlata()
        break;  
      case "Lancero":
       this.Lancero();
        break;
      case "Caballo":
        this.Caballo();
      break; 
      case "Rey":
        this.Rey();
      break;
      case "Alfil":
        this.Alfil();
        break;
      case "AlfilPromocionado":
        this.Alfil();
        break;
      case "Torre":
        this.Torre();
        break;
      case "TorrePromocionada":
       this.Torre();
      break;         
    } 
  }
  
  //elimina la ficha
  onEliminar(): void {
    this.matriz[this.filaEliminar][this.columnaEliminar] = { id: "", nombre: "" };
  }
 //============================================ fin logica lugar==============================================//

//========================================== Promocion y asignacion ==========================================//
//============================================= logica fichas  ===============================================//

//============================================================================================================//
//                                          Peon
//============================================================================================================//

peon(){
  this.matriz[this.fila][this.columna] = this.ficha;
  this._HelperPromocionService.PeonPromocion(this.ficha,this.fila);

}
//============================================================================================================//
//                                      General De Oro
//============================================================================================================//
GeneralOro(){
  this.matriz[this.fila][this.columna] = this.ficha;
}
//============================================================================================================//
//                                      General De Plata
//============================================================================================================//
GeneralPlata(){
  this.matriz[this.fila][this.columna] = this.ficha;
  this._HelperPromocionService.GeneralPlataPromocion(this.ficha,this.fila);
}
//============================================================================================================//
//                                            Lancero
//============================================================================================================//
Lancero(){
  this.matriz[this.fila][this.columna] = this.ficha;
  this._HelperPromocionService.LanceroPromocion(this.ficha,this.fila);
  
}
//============================================================================================================//
//                                              Caballo
//============================================================================================================//
Caballo(){
  this.matriz[this.fila][this.columna] = this.ficha;

  this._HelperPromocionService.Caballo(this.ficha,this.fila);

}
//============================================================================================================//
//                                              Alfil
//============================================================================================================//
Alfil(){
  this.matriz[this.fila][this.columna] = this.ficha;
  this._HelperPromocionService.AlfilPromocionado(this.ficha,this.fila);
}
//============================================================================================================//
//                                               Rey
//============================================================================================================//
Rey(){
  this.matriz[this.fila][this.columna] = this.ficha;
  
}
//============================================================================================================//
//                                               Torre
//============================================================================================================//

Torre(){
  this.matriz[this.fila][this.columna] = this.ficha;    
  this._HelperPromocionService.TorrePromocionada(this.ficha,this.fila);

}
//========================================== fin logica fichas ====================================//


}
