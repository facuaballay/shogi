import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CapturarService {

  constructor(public router:Router) { 
  }
  
  Capturar(ficha,jugador,capjug1,capjug2){
    
    if(jugador === "jugador1"){
      switch(ficha.permiso){
        case "jugador1":
          return false;
        case "jugador2":
          this.piezaPromocionadacapturar(ficha);
        if(ficha.nombre === "Rey"){
          alert('Jaque Mate gano Jugador 1');
          window.location.href = '/home';
        }
        capjug1.push(ficha)
        // console.log(capjug2);
        return true;
        case "":
          return true;  
      }

    }else{
      switch(ficha.permiso){
        case "jugador2":
          return false;
        case "jugador1":
            this.piezaPromocionadacapturar(ficha);
            if(ficha.nombre === "Rey"){
              alert('Jaque Mate gano Jugador 2');
              window.location.href = '/home';
            }
        capjug2.push(ficha)
        // console.log(capjug1);
        return true;
        case "":
          return true;  
      }
    }
  }
  
  
  //devuelve la pieza promocionada a la normalidad cuando captura.
 piezaPromocionadacapturar(ficha){
   
   //Peon
  if(ficha.img === "assets/Fichas/Peon-promocionado.png"){
    ficha.nombre = "Peon";
    ficha.img='assets/Fichas/Peon.png'
  }
  //G.Plata
  if(ficha.img === "assets/Fichas/G.plata-promocionado.png"){
    ficha.nombre = "G.Plata";
    ficha.img='assets/Fichas/G.plata.png';
  }
  //Lancero
  if(ficha.img === "assets/Fichas/Lancero-promocionado.png"){
    ficha.nombre = "Lancero";
  }
  //Caballo
  if(ficha.img === "assets/Fichas/Caballo-promocionado.png"){
    ficha.nombre = "Caballo";
    ficha.img='assets/Fichas/Caballo.png'
  }
  //Alfil
  if(ficha.img === "assets/Fichas/Alfil-Promocionado.png"){
    ficha.nombre = "Alfil";
    ficha.img='assets/Fichas/Alfil.png';
  }
  //Torre
  if(ficha.img === "assets/Fichas/Torre-promocionada.png"){
    ficha.nombre = "Torre";
    ficha.img='assets/Fichas/Torre.png';
  }
}



}
