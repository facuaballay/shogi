import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapturarService {

  constructor() { 
    
  }
  
  Capturar(ficha,jugador,capjug1,capjug2){
    if(jugador === "jugador1"){
      switch(ficha.permiso){
        case "jugador1":
          return false;
        case "jugador2":
        capjug1.push(ficha)
        console.log(capjug2);
        return true;
        case "":
          return true;  
      }

    }else{
      switch(ficha.permiso){
        case "jugador2":
          return false;
        case "jugador1":
        capjug2.push(ficha)
        console.log(capjug1);
        return true;
        case "":
          return true;  
      }
    }
  }
 
}