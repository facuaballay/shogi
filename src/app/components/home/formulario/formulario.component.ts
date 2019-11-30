import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableroService } from '../../../services/tablero.service';
import { HelperFichasService } from '../../../services/helper/helper-fichas.service';
import swal from 'sweetalert';
import { HelperPromocionesService } from '../../../services/helper/helper-promociones.service';



import { ToastrService } from 'ngx-toastr';





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
  filaNueva: number;
  columnaNueva: number;
  filaEliminar: number;
  columnaEliminar: number;
  matriz: Array<any>;

  //
  capjug1= new Array();
  capjug2=new Array();
  

  jugador :string;

  constructor(public _TableroService: TableroService,
              private _HelperFichaService: HelperFichasService,
              public _HelperPromocionService:HelperPromocionesService,
              private toastr: ToastrService
              ) {
    
    this.matriz = _TableroService.CrearTablero();
    // console.log(this.matriz)
  }


  ngOnInit() {
    this.jugador = 'jugador1';

    
  
  
  }



//========================================= lugar ============================================//
//Mueve la Ficha 
onMover(ficha: string, lugar: string) {
    //devuelve un true
    let sePuede = this.sePuede(ficha, lugar);
    if (sePuede) {
      this.onEliminar();
      this.onPromocion();

      
      switch (this.jugador) {
        case (this.jugador = "jugador1"):
          this.jugador = "jugador2";
          this.toastr.success('Turno Jugador 2', '', {
            tapToDismiss:true,
            closeButton:true,
            positionClass: "toast-top-center",
            timeOut:6000
            
          });
           

          break;
        case (this.jugador = "jugador2"):
          this.jugador = "jugador1";
          this.toastr.success('Turno Jugador 1', '', {
            tapToDismiss:true,
            closeButton:true,
            positionClass: "toast-top-center",
            timeOut:6000    
          });
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
    
    //comprobacion si existe la ficha  
    let existe = this.onFicha(ficha);
    //si existe que ficha es? y como se mueve
    if(existe){
      switch (this.ficha.nombre){
        case "Peon":
        return this._HelperFichaService.peon(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz, this.capjug1,this.capjug2);
    
        case "G.Oro":
        return this._HelperFichaService.GeneralOro(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);
        
        case "G.Plata":
        return this._HelperFichaService.GeneralPlata(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);
        
        case "Lancero":
        return this._HelperFichaService.Lancero(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);

        case "Caballo":
        return this._HelperFichaService.Caballo(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);

        case "Rey":
          return this._HelperFichaService.Rey(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);
        
        case "Alfil":
        return this._HelperFichaService.Alfil(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);

        case "AlfilPromocionado":
        return this._HelperFichaService.AlfilPromocionado(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);
        
        case "Torre":
        return this._HelperFichaService.Torre(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);
        
        case "TorrePromocionada":
        return this._HelperFichaService.TorrePromocionada(this.filaEliminar, this.columnaEliminar, this.fila, this.columna, this.jugador,this.matriz,this.capjug1,this.capjug2);
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
//Promocion y asignacion.
//============================================================================================================//
  onPromocion() {
  
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
 
//============================================================================================================//
//Elimina la ficha
//============================================================================================================//
  onEliminar(): void {
    this.matriz[this.filaEliminar][this.columnaEliminar] = { id: "", nombre: "", permiso: "", img:""};
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
//========================================== Fin Promocion fichas ====================================//
ReintroducirPiezas(fichanueva:number,nuevolugar){
   //lugares futuros
   this.filaNueva = Number(nuevolugar.substr(0, 1));
   this.columnaNueva = Number(nuevolugar.substr(1, 1));
   
 
   
  for(let insertar of this.capjug1){
    if(fichanueva === insertar.id ){
    
      if(this.matriz[this.filaNueva][this.columnaNueva].id === "" && 
      this.jugador === "jugador1" ){  
        insertar.permiso = "jugador1";
        this.matriz[this.filaNueva][this.columnaNueva] = insertar;
        this.capjug1.splice(insertar,1);
        // console.log(insertar);
        swal('Ficha introducida correctamente','','success')
      }
      
    }
   
  }
  for(let insertar of this.capjug2){
    if(fichanueva === insertar.id  && this.jugador === "jugador2"){
      if(this.matriz[this.filaNueva][this.columnaNueva].id === "" ){
        insertar.permiso = "jugador2";
        this.matriz[this.filaNueva][this.columnaNueva] = insertar;
        this.capjug2.splice(insertar,1);
        
       swal('Ficha introducida correctamente','','success')
      }
       }
        
    }
  }




}  


