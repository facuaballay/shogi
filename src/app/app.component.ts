import { Component } from '@angular/core';
import { TableroService } from './services/tablero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shogi';
  tablero:Array<any>;
  lugar: string;
  ficha: string;
  fila: string ='';
  columna: string = '';
  filaEliminar: number;
  columnaEliminar: number;
  jugador = "jugador1";
  lista;

  constructor(public TableroService:TableroService){

    this.tablero = this.TableroService.CrearTablero();
    this.lista = TableroService.fichas;

  }

  ngOnInit() {
  }
//buscar la ficha
onFicha(ficha: string):boolean{
   
  for(var f=0;f<9;f++){
    for(var c=0;c<9;c++){
      if(this.tablero[f][c].id === ficha && this.tablero[f][c].permiso === this.jugador ){
        this.filaEliminar = f;
        this.columnaEliminar = c;
        this.ficha = this.tablero[f][c];
        console.log(this.jugador)
        return true;
      } 
    }
  }
return false;
}
//elimina ficha
onEliminar():void{
  this.tablero[this.filaEliminar][this.columnaEliminar] = {id:"", nombre: ""};
}
//lugar ficha
onLugar(lugar:string){
  this.fila = lugar.substr(0,1);
  this.columna = lugar.substr(1,1);
  this.tablero[this.fila][this.columna] = this.ficha;

  }
//Mueve Ficha  
onMover(ficha: string, lugar:string){
  
  let EstaFicha = this.onFicha(ficha);
  
  if(EstaFicha){
   
      this.onEliminar();
      this.onLugar(lugar);
      switch (this.jugador) {
        case this.jugador = "jugador1":
            this.jugador = "jugador2"
            alert('turno del jugador 2')
          break;
          case this.jugador = "jugador2":
            this.jugador = "jugador1"
            alert('turno del jugador 1')
          break;
        default:
          break;
      }

  }else{
    console.log('te mandaste cualquiera')
    
  }
  
}

}





