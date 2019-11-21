import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperFichasService {

  constructor() { }


//===================================================================================================================//
//Movimiento Peon
//===================================================================================================================//
peon(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string) {
    
  switch (jugador) {
    case "jugador1":
      //movimiento hacia delante solamente.
    if (filaFutura != filaActual + 1 || columnaFutura != columnaActual ) { 
        return false;
      } else {
        return true;
      }      
//================================
//jugador2
//================================
    case "jugador2":
      if (filaFutura != filaActual - 1 || columnaFutura != columnaActual   ) {
        return false;
      } else {
        return true;
      }
  }
}
//===================================================================================================================//
//Movimiento  General Oro
//===================================================================================================================//
GeneralOro(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
  
  switch(jugador){
    case "jugador1":
      //adelante y atras
      if(filaFutura == filaActual + 1 && columnaFutura == columnaActual
        || filaFutura == filaActual - 1 && columnaFutura == columnaActual ){
  
        return true
      }
      //para los lados
      if(columnaFutura == columnaActual + 1 && filaFutura == filaActual 
        || columnaFutura == columnaActual - 1 && filaFutura == filaActual ){
          return true;
      }
      //movimiento en L
      if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 
        ||columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ){
        return true;
      }
  
      else {
        return false;
      }
//================================
//jugador2
//================================        
    case "jugador2":
        if(filaFutura == filaActual - 1 && columnaFutura == columnaActual
          || filaFutura == filaActual + 1 && columnaFutura == columnaActual ){
    
          return true
        }
        //para los lados
        if(columnaFutura == columnaActual - 1 && filaFutura == filaActual 
          || columnaFutura == columnaActual + 1 && filaFutura == filaActual ){
            return true;
        }
        //movimiento en L
        if(columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 
          ||columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ){
          return true;
        }
    
        else {
          return false;
        }

  }
}

//===================================================================================================================//
//Movimiento  General Plata
//===================================================================================================================//
GeneralPlata(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){

switch(jugador){
  case "jugador1":
    //en L hacia atras
    if( columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 
     || columnaFutura == columnaActual  - 1 && filaFutura == filaActual - 1  ){
  return true;
   }
   //en L hacia Delante
    else if(columnaFutura == columnaActual  + 1 && filaFutura == filaActual + 1  
      ||  columnaFutura == columnaActual  - 1 && filaFutura == filaActual + 1 ){
    return true;
   }
   //hacia delante solamente
    else if(filaFutura == filaActual + 1 && columnaFutura == columnaActual ){
      return true
  }
else{
  return false;
}
//================================
//jugador2
//================================        
  case "jugador2":
      if( columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 
        || columnaFutura == columnaActual  - 1 && filaFutura == filaActual + 1  ){
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
 }
  
}
//===================================================================================================================//
//Movimiento Lancero
//===================================================================================================================//
Lancero(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){

  switch(jugador) {
    case "jugador1":
      //movimiento solo hacia delante 
      if(filaFutura < filaActual  || columnaFutura != columnaActual || filaFutura === 9 || filaFutura === filaActual   ){
        
        return false;
      }
      else{
        
        return true;  
      }
//================================
//jugador2
//================================        
      case "jugador2":
        if(filaFutura > filaActual  || columnaFutura != columnaActual || filaFutura === 0 || filaFutura === filaActual  ){
          return false;
        }else{
          
        }
        return true;  
      }    
    }
//===================================================================================================================//
//Movimiento  Caballo
//===================================================================================================================//
Caballo(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
  switch(jugador){
    case "jugador1":
      //movimiento en l hacia delante
        if(filaFutura != filaActual + 2 && columnaFutura != columnaActual + 1  ) {
          return false;
        }
        else if(filaFutura != filaActual + 2 && columnaFutura != columnaActual - 1  ){
            return false;
        }else{
          return true;
        }
    case "jugador2":
//================================
//jugador2
//================================        
       //movimiento en l hacia delante
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
//===================================================================================================================//
//Movimiento  Rey
//===================================================================================================================//
Rey(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){
 
  switch(jugador){
    case "jugador1":
      //movimiento en todas las direcciones pero de a uno solo
        if(columnaFutura == columnaActual  + 1 || filaFutura == filaActual + 1 ){
          return true;
        }else if (columnaFutura == columnaActual  - 1 || filaFutura == filaActual - 1 ) {
          return true;
        }
        else{
          return false;
      }
//================================
//jugador2
//================================        
    case "jugador2":
        //movimiento en todas las direcciones pero de a uno solo
        if(columnaFutura == columnaActual  - 1 || filaFutura == filaActual - 1 ){
          return true;
        }else if (columnaFutura == columnaActual  + 1 || filaFutura == filaActual + 1 ) {
          return true;
        }
        else{
          return false;
      }
  }

}
//===================================================================================================================//
//Alfil y Alfil Promocionado
//===================================================================================================================//
Alfil(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){

//diagonal izq adelante

switch(jugador){
  case "jugador1":
    //diagonal izq adelante
if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
  columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
  columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
  columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
  columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
  columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
  columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
  columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
  ){

  return true;
}
//diagonal derecha adelante

if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ||
  columnaFutura == columnaActual + 2 && filaFutura == filaActual + 2 ||
  columnaFutura == columnaActual + 3 && filaFutura == filaActual + 3 ||
  columnaFutura == columnaActual + 4 && filaFutura == filaActual + 4 ||
  columnaFutura == columnaActual + 5 && filaFutura == filaActual + 5 ||
  columnaFutura == columnaActual + 6 && filaFutura == filaActual + 6 ||
  columnaFutura == columnaActual + 7 && filaFutura == filaActual + 7 ||
  columnaFutura == columnaActual + 8 && filaFutura == filaActual + 8 
  ){

  return true;
}
//diagonal columna dercha atras
else if(
  columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ||
  columnaFutura == columnaActual + 2 && filaFutura == filaActual - 2 ||
  columnaFutura == columnaActual + 3 && filaFutura == filaActual - 3 ||
  columnaFutura == columnaActual + 4 && filaFutura == filaActual - 4 ||
  columnaFutura == columnaActual + 5 && filaFutura == filaActual - 5 ||
  columnaFutura == columnaActual + 6 && filaFutura == filaActual - 6 ||
  columnaFutura == columnaActual + 7 && filaFutura == filaActual - 7 ||
  columnaFutura == columnaActual + 8 && filaFutura == filaActual - 8 
  ){
    return true;
  }
  //diagonal columna izq atras
else if(
    columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ||
    columnaFutura == columnaActual - 2 && filaFutura == filaActual - 2 ||
    columnaFutura == columnaActual - 3 && filaFutura == filaActual - 3 ||
    columnaFutura == columnaActual - 4 && filaFutura == filaActual - 4 ||
    columnaFutura == columnaActual - 5 && filaFutura == filaActual - 5 ||
    columnaFutura == columnaActual - 6 && filaFutura == filaActual - 6 ||
    columnaFutura == columnaActual - 7 && filaFutura == filaActual - 7 ||
    columnaFutura == columnaActual - 8 && filaFutura == filaActual - 8 
    ){
      return true;
      
    }
else{
  return false;
}
//================================
//jugador2
//================================
case "jugador2":
  //diagonal izq atras
     if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
      ){
  
      return true;
    }
    //diagonal derecha atras
    
    if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual + 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual + 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual + 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual + 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual + 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual + 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual + 8 && filaFutura == filaActual + 8 
      ){
  
      return true;
    }
    //diagonal columna derecha adelante
    else if(
      columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ||
      columnaFutura == columnaActual + 2 && filaFutura == filaActual - 2 ||
      columnaFutura == columnaActual + 3 && filaFutura == filaActual - 3 ||
      columnaFutura == columnaActual + 4 && filaFutura == filaActual - 4 ||
      columnaFutura == columnaActual + 5 && filaFutura == filaActual - 5 ||
      columnaFutura == columnaActual + 6 && filaFutura == filaActual - 6 ||
      columnaFutura == columnaActual + 7 && filaFutura == filaActual - 7 ||
      columnaFutura == columnaActual + 8 && filaFutura == filaActual - 8 
      ){
        return true;
      }
      //diagonal columna izq adelante
    else if(
        columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ||
        columnaFutura == columnaActual - 2 && filaFutura == filaActual - 2 ||
        columnaFutura == columnaActual - 3 && filaFutura == filaActual - 3 ||
        columnaFutura == columnaActual - 4 && filaFutura == filaActual - 4 ||
        columnaFutura == columnaActual - 5 && filaFutura == filaActual - 5 ||
        columnaFutura == columnaActual - 6 && filaFutura == filaActual - 6 ||
        columnaFutura == columnaActual - 7 && filaFutura == filaActual - 7 ||
        columnaFutura == columnaActual - 8 && filaFutura == filaActual - 8 
        ){
          return true;
          //1 movimiento hacia la izq
        }
}
}
AlfilPromocionado(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){

switch(jugador){
  case "jugador1":
    //diagonal izq adelante
if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
  columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
  columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
  columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
  columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
  columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
  columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
  columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
  ){

  return true;
}
//diagonal derecha adelante

if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ||
  columnaFutura == columnaActual + 2 && filaFutura == filaActual + 2 ||
  columnaFutura == columnaActual + 3 && filaFutura == filaActual + 3 ||
  columnaFutura == columnaActual + 4 && filaFutura == filaActual + 4 ||
  columnaFutura == columnaActual + 5 && filaFutura == filaActual + 5 ||
  columnaFutura == columnaActual + 6 && filaFutura == filaActual + 6 ||
  columnaFutura == columnaActual + 7 && filaFutura == filaActual + 7 ||
  columnaFutura == columnaActual + 8 && filaFutura == filaActual + 8 
  ){

  return true;
}
//diagonal columna dercha atras
else if(
  columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ||
  columnaFutura == columnaActual + 2 && filaFutura == filaActual - 2 ||
  columnaFutura == columnaActual + 3 && filaFutura == filaActual - 3 ||
  columnaFutura == columnaActual + 4 && filaFutura == filaActual - 4 ||
  columnaFutura == columnaActual + 5 && filaFutura == filaActual - 5 ||
  columnaFutura == columnaActual + 6 && filaFutura == filaActual - 6 ||
  columnaFutura == columnaActual + 7 && filaFutura == filaActual - 7 ||
  columnaFutura == columnaActual + 8 && filaFutura == filaActual - 8 
  ){
    return true;
  }
  //diagonal columna izq atras
else if(
    columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ||
    columnaFutura == columnaActual - 2 && filaFutura == filaActual - 2 ||
    columnaFutura == columnaActual - 3 && filaFutura == filaActual - 3 ||
    columnaFutura == columnaActual - 4 && filaFutura == filaActual - 4 ||
    columnaFutura == columnaActual - 5 && filaFutura == filaActual - 5 ||
    columnaFutura == columnaActual - 6 && filaFutura == filaActual - 6 ||
    columnaFutura == columnaActual - 7 && filaFutura == filaActual - 7 ||
    columnaFutura == columnaActual - 8 && filaFutura == filaActual - 8 
    ){
      return true;
      //1 movimiento hacia la derecha
    }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual){
      return true;
    }
    //1 movimiento hacia la izquierda
else if(columnaFutura == columnaActual - 1 && filaFutura == filaActual){
    return true;
    }  
    //1 movimiento hacia la delante 
else if (columnaFutura == columnaActual  && filaFutura == filaActual + 1){
  return true;
}
//1 movimiento hacia atras
else if (columnaFutura == columnaActual  && filaFutura == filaActual - 1){
  return true;
}
else{
  return false;
}
//================================
//jugador2
//================================
case "jugador2":
  //diagonal izq atras
     if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
      ){
  
      return true;
    }
    //diagonal derecha atras
    
    if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual + 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual + 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual + 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual + 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual + 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual + 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual + 8 && filaFutura == filaActual + 8 
      ){
  
      return true;
    }
    //diagonal columna derecha adelante
    else if(
      columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ||
      columnaFutura == columnaActual + 2 && filaFutura == filaActual - 2 ||
      columnaFutura == columnaActual + 3 && filaFutura == filaActual - 3 ||
      columnaFutura == columnaActual + 4 && filaFutura == filaActual - 4 ||
      columnaFutura == columnaActual + 5 && filaFutura == filaActual - 5 ||
      columnaFutura == columnaActual + 6 && filaFutura == filaActual - 6 ||
      columnaFutura == columnaActual + 7 && filaFutura == filaActual - 7 ||
      columnaFutura == columnaActual + 8 && filaFutura == filaActual - 8 
      ){
        return true;
      }
      //diagonal columna izq adelante
    else if(
        columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ||
        columnaFutura == columnaActual - 2 && filaFutura == filaActual - 2 ||
        columnaFutura == columnaActual - 3 && filaFutura == filaActual - 3 ||
        columnaFutura == columnaActual - 4 && filaFutura == filaActual - 4 ||
        columnaFutura == columnaActual - 5 && filaFutura == filaActual - 5 ||
        columnaFutura == columnaActual - 6 && filaFutura == filaActual - 6 ||
        columnaFutura == columnaActual - 7 && filaFutura == filaActual - 7 ||
        columnaFutura == columnaActual - 8 && filaFutura == filaActual - 8 
        ){
          return true;
          //1 movimiento hacia la izq
        }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual){
          return true;
        }
        //1 movimiento hacia la derecha
    else if(columnaFutura == columnaActual - 1 && filaFutura == filaActual){
        return true;
        }  
        //1 movimiento hacia la atras 
    else if (columnaFutura == columnaActual  && filaFutura == filaActual + 1){
      return true;
    }
    //1 movimiento hacia delante
    else if (columnaFutura == columnaActual  && filaFutura == filaActual - 1){
      return true;
    }
    else{
      return false;
    }
}
}
//===================================================================================================================//
//Torre y Torre Promocionada
//===================================================================================================================//
Torre(filaActual: number,columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){

switch(jugador){
  case "jugador1":
//recorre sobre las filas solamente
if(filaFutura > filaActual  && columnaFutura == columnaActual || filaFutura < filaActual  && columnaFutura == columnaActual ){
  return true;
}
//recorre solo sobre columnas
if(columnaFutura > columnaActual && filaFutura == filaActual 
  || columnaFutura < columnaActual && filaFutura == filaActual  ){
return true;
}
else{
  return false;
}
//================================
//jugador2
//================================
case "jugador2":
  //recorre sobre las filas solamente
if(filaFutura < filaActual  && columnaFutura == columnaActual || filaFutura > filaActual  && columnaFutura == columnaActual ){
  return true;
}
//recorre solo sobre columnas
if(columnaFutura < columnaActual && filaFutura == filaActual 
  || columnaFutura > columnaActual && filaFutura == filaActual  ){
return true;
}
else{
  return false;
}

}  
}
TorrePromocionada(filaActual: number,columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string){


switch(jugador){
  case "jugador1":
   //recorre sobre las filas solamente
 if(filaFutura > filaActual  && columnaFutura == columnaActual 
    || filaFutura < filaActual  && columnaFutura == columnaActual ){
    return true;
  }
//recorre solo sobre columnas
  if(columnaFutura > columnaActual && filaFutura == filaActual 
    || columnaFutura < columnaActual && filaFutura == filaActual  ){
    return true;
    }
//movimiento en l hacia delante
  if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1  ){
    return true;
  }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ){
  return true;
  }
//movimiento en l hacia Atras
if(columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ){
  return true;
  }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1){
    return true;
  }
  else{
    return false;
  }
//================================
//jugador2
//================================
case "jugador2":
//recorre sobre las filas solamente
if(filaFutura > filaActual  && columnaFutura == columnaActual 
    || filaFutura < filaActual  && columnaFutura == columnaActual ){
    return true;
  }
//recorre solo sobre columnas
if(columnaFutura > columnaActual && filaFutura == filaActual 
    || columnaFutura < columnaActual && filaFutura == filaActual  ){
  return true;
  }
//movimiento en l hacia Atras
if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1  ){
    return true;
  }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ){
    return true;
  }
//movimiento en l hacia adelante
if(columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ){
  return true;
  }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1){
    return true;
  }
  else{
    return false;
  }
    }
  }


}