import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperFichasService {

  constructor() { }

  peon(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string) {
    
    switch (jugador) {
      case "jugador1":
        if (filaFutura != filaActual + 1 || columnaActual != columnaFutura) {
          return false;
        } else {
          return true;
        }
        
      case "jugador2":
        if (filaFutura != filaActual - 1 || columnaActual != columnaFutura) {
          return false;
        } else {
          return true;
        }
    }
  }
}
