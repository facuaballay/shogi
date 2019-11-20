import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperFichasService {

  constructor() { }

//movimiento Peon
//listo
  peon(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string) {
    
    switch (jugador) {
      case "jugador1":
      if (filaFutura != filaActual + 1 || columnaFutura != columnaActual ) { 
          return false;
        } else {
          return true;
        }      

      case "jugador2":
        if (filaFutura != filaActual - 1 || columnaFutura != columnaActual   ) {
          return false;
        } else {
          return true;
        }
    }
  }
    //movimiento General Oro

  GeneralOro(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
    
    // if(filaFutura == filaActual - 1 && columnaFutura === columnaActual - 1  ) {
    //   return false;
    // }else if(filaFutura == filaActual - 1 && columnaFutura === columnaActual + 1){
    //   return false;
    // }
    if(filaFutura != filaActual + 1 && columnaFutura != columnaActual + 1  || columnaFutura != columnaActual - 1   ){
      return false;
    }
    else{
      return true;
    }
  }

  //movimiento General Plata
  //listo
  GeneralPlata(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
  
  switch(jugador){
    case "jugador1":
      //en l hacia delante
        if( columnaFutura == columnaActual  - 1 && filaFutura == filaActual + 1 
          || columnaFutura == columnaActual  + 1 && filaFutura == filaActual + 1  ){
           return true;
         }
        else if(columnaFutura == columnaActual  - 1 && filaFutura == filaActual - 1  
          ||  columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 ){
          console.log('a')
          return true;
        }
        else if(filaFutura == filaActual - 1 && columnaFutura == columnaActual ){
          return true
        }
         else{
           return false;
         }
    case "jugador2":
        if( columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 
         || columnaFutura == columnaActual  - 1 && filaFutura == filaActual - 1  ){
      return true;
       }
        else if(columnaFutura == columnaActual  + 1 && filaFutura == filaActual + 1  
          ||  columnaFutura == columnaActual  - 1 && filaFutura == filaActual + 1 ){
        return true;
       }
        else if(filaFutura == filaActual + 1 && columnaFutura == columnaActual ){
          return true
      }
    else{
      return false;
    }
   }
    
}
  //Movimiento lancero
  //listo
  Lancero(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){


    switch(jugador) {
      case "jugador1":
        if(filaFutura < filaActual  || columnaFutura != columnaActual || filaFutura === 9 || filaFutura === filaActual   ){
          
          return false;
        }
        else{
          
          return true;  
        }
        case "jugador2":
          if(filaFutura > filaActual  || columnaFutura != columnaActual || filaFutura === 0 || filaFutura === filaActual  ){
            return false;
          }else{
            
          }
          return true;  
        }    
      }
//Movimiento Caballo
//listo
  Caballo(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
    switch(jugador){
      case "jugador1":
          if(filaFutura != filaActual + 2 && columnaFutura != columnaActual + 1  ) {
            return false;
          }
          else if(filaFutura != filaActual + 2 && columnaFutura != columnaActual - 1  ){
              return false;
          }else{
            return true;
          }
      case "jugador2":
      if(filaFutura != filaActual - 2 && columnaFutura != columnaActual - 1  ) {
        return false;
      }
      else if(filaFutura == filaActual - 2 && columnaFutura == columnaActual + 1  ){
          return false;
      }else{
        return true;
      }
    }
 }
      //Movimiento Rey
  Rey(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
   
    if(columnaFutura == columnaActual  + 1 || filaFutura == filaActual + 1 ){
      return true;
    }else if (columnaFutura == columnaActual  - 1 || filaFutura == filaActual - 1 ) {
      return true;
    }
    
    else{
      return false;
  }
 }

 //alfil y alfil promocionado
 Alfil(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
 // filas filaFutura == filaActual + 1
  if( filaFutura == filaActual  || columnaFutura == columnaActual - 1   ){
    console.log('a');
    return false;
  }
  else{
    return true;
  }

}
 //torre y torre promocionada
 Torre(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){

}

}
