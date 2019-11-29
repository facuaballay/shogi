import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CapturarService } from '../capturar.service';
import { $$ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HelperFichasService {

  constructor(public _CapturarService:CapturarService) {

   }

//===================================================================================================================//
//Movimiento Peon
//===================================================================================================================//
peon(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2) {

  let ficha = matriz[filaFutura][columnaFutura];
  switch (jugador) {
    case "jugador1":
      //movimiento hacia delante solamente.
    if (filaFutura != filaActual + 1 || columnaFutura != columnaActual ) { 
        return false;
      } else {
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
      }   
   
//================================
//jugador2
//================================
    case "jugador2":
      if (filaFutura != filaActual - 1 || columnaFutura != columnaActual   ) {
        return false;
      } else {
        // this._CapturarService.ReintroducirPiezas(ficha,null,filaFutura,columnaFutura,matriz);
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

      }
  }
}
//===================================================================================================================//
//Movimiento  General Oro
//===================================================================================================================//
GeneralOro(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];
  switch(jugador){
    case "jugador1":
      //adelante y atras
      if(filaFutura == filaActual + 1 && columnaFutura == columnaActual
        || filaFutura == filaActual - 1 && columnaFutura == columnaActual ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

      }
      //para los lados
      if(columnaFutura == columnaActual + 1 && filaFutura == filaActual 
        || columnaFutura == columnaActual - 1 && filaFutura == filaActual ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

      }
      //movimiento en L
      if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 
        ||columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

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
    
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

        }
        //para los lados
        if(columnaFutura == columnaActual - 1 && filaFutura == filaActual 
          || columnaFutura == columnaActual + 1 && filaFutura == filaActual ){
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

        }
        //movimiento en L
        if(columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 
          ||columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ){
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

        }
      else {
      return false;
    }
  }
}

//===================================================================================================================//
//Movimiento  General Plata
//===================================================================================================================//
GeneralPlata(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];
  switch(jugador){
      case "jugador1":
    //en L hacia atras
    if( columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 
     || columnaFutura == columnaActual  - 1 && filaFutura == filaActual - 1  ){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
    }
   //en L hacia Delante
    else if(columnaFutura == columnaActual  + 1 && filaFutura == filaActual + 1  
      ||  columnaFutura == columnaActual  - 1 && filaFutura == filaActual + 1 ){
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
    }
   //hacia delante solamente
    else if(filaFutura == filaActual + 1 && columnaFutura == columnaActual ){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

    }else{
      return false;
  }
  //================================
  //jugador2
  //================================        
  case "jugador2":
      if( columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 
        || columnaFutura == columnaActual  - 1 && filaFutura == filaActual + 1  ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

       }
      else if(columnaFutura == columnaActual  - 1 && filaFutura == filaActual - 1  
        ||  columnaFutura == columnaActual  + 1 && filaFutura == filaActual - 1 ){
       
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

      }
      else if(filaFutura == filaActual - 1 && columnaFutura == columnaActual ){
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

      }else{
        return false;
    }
  } 
}
//===================================================================================================================//
//Movimiento Lancero
//===================================================================================================================//
Lancero(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){

  let ficha = matriz[filaFutura][columnaFutura];

  switch(jugador) {
    case "jugador1":
    if (filaFutura > filaActual  && columnaFutura == columnaActual) {
        for(var f=filaActual;f <= filaFutura;f++){
          if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
            return false;
          }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador1" ){
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
          }
        }
      }
 
    
//================================
//jugador2
//================================        
      case "jugador2":
      if (filaFutura < filaActual  && columnaFutura == columnaActual) {
        for(var f=filaActual;f >= filaFutura;f--){
          if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
            return false;
          }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador2" ){
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
          }
        }
      }
      }    
    }
//===================================================================================================================//
//Movimiento  Caballo
//===================================================================================================================//
Caballo(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];
  switch(jugador){
    case "jugador1":
      //movimiento en l hacia delante
        if(filaFutura != filaActual + 2 && columnaFutura != columnaActual + 1  ) {
          return false;
        }
        else if(filaFutura != filaActual + 2 && columnaFutura != columnaActual - 1  ){
            return false;
        }else{
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

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
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

    }
  }
}
//===================================================================================================================//
//Movimiento  Rey
//===================================================================================================================//
Rey(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];
  switch(jugador){
    case "jugador1":
      //movimiento en todas las direcciones pero de a uno solo
        if(columnaFutura == columnaActual  + 1 || filaFutura == filaActual + 1 ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
        
        }else if (columnaFutura == columnaActual  - 1 || filaFutura == filaActual - 1 ) {
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
         
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
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

        }else if (columnaFutura == columnaActual  + 1 || filaFutura == filaActual + 1 ) {
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

        }
        else{
          return false;
      }
  }

}
//===================================================================================================================//
//Alfil y Alfil Promocionado
//===================================================================================================================//
Alfil(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){

  let ficha = matriz[filaFutura][columnaFutura];
  let columna;
  let fila;

    switch(jugador){
      case "jugador1":

    //diagonal izq adelante
    columna = columnaActual + 1;
    fila = filaActual - 1;
    if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
    ){
      for(var f=0;f<9;f++){
        columna = columna - 1
        fila = fila + 1;
        for(var c=0;c<9;c++){
          if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
            // console.log("fila "+fila+" columna "+columna);
            // console.log("hay una ficha adelante, diagonal izq adelante");
            // console.log(matriz[fila][columna].permiso);
            return false;
          }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
            // console.log("diagonal izq adelante");
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
          }
        }
      }
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
      columna = columnaActual - 1;
      fila = filaActual - 1;
      for(var f=0;f<9;f++){
        columna = columna + 1
        fila = fila + 1;
        // console.log("fila "+fila);
        // console.log("columna "+columna);
        for(var c=0;c<9;c++){
          if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
            // console.log("hay una ficha adelante, diagonal derecha adelante");
            // console.log("f "+fila);
            // console.log("c "+columna);
            // console.log(matriz[fila][columna]);
            return false;
          }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
            // console.log("diagonal derecha adelante");
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
          }
        }
      }
    }

    //diagonal columna dercha atras
     if(
      columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ||
      columnaFutura == columnaActual + 2 && filaFutura == filaActual - 2 ||
      columnaFutura == columnaActual + 3 && filaFutura == filaActual - 3 ||
      columnaFutura == columnaActual + 4 && filaFutura == filaActual - 4 ||
      columnaFutura == columnaActual + 5 && filaFutura == filaActual - 5 ||
      columnaFutura == columnaActual + 6 && filaFutura == filaActual - 6 ||
      columnaFutura == columnaActual + 7 && filaFutura == filaActual - 7 ||
      columnaFutura == columnaActual + 8 && filaFutura == filaActual - 8 
    ){
      columna = columnaActual - 1;
      fila = filaActual + 1;
      for(var f=0;f<9;f++){
        columna = columna + 1;
        fila = fila - 1;
        // console.log("fila "+fila);
        // console.log("columna "+columna);
        for(var c=0;c<9;c++){
          if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
            // console.log("hay una ficha adelante, diagonal columna dercha atras");
            return false;
          }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
            // console.log("diagonal columna dercha atras");
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
          }
        }
      }
    }
    
    //diagonal columna izq atras
    if(
        columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ||
        columnaFutura == columnaActual - 2 && filaFutura == filaActual - 2 ||
        columnaFutura == columnaActual - 3 && filaFutura == filaActual - 3 ||
        columnaFutura == columnaActual - 4 && filaFutura == filaActual - 4 ||
        columnaFutura == columnaActual - 5 && filaFutura == filaActual - 5 ||
        columnaFutura == columnaActual - 6 && filaFutura == filaActual - 6 ||
        columnaFutura == columnaActual - 7 && filaFutura == filaActual - 7 ||
        columnaFutura == columnaActual - 8 && filaFutura == filaActual - 8 
      ){
        columna = columnaActual + 1;
        fila = filaActual + 1;
        for(var f=0;f<9;f++){
          columna = columna - 1
          fila = fila - 1;
          // console.log("fila "+fila);
          // console.log("columna "+columna);
          for(var c=0;c<9;c++){
            if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) &&
              (fila != filaFutura && columna != columnaFutura)){
              // console.log("hay una ficha adelante, diagonal columna izq atras");
              return false;
            }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
              // console.log("diagonal columna izq atras");
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
            }
          }
        } 
      } else {
        return false;
      }
  //================================
  //jugador2
  //================================
  case "jugador2":
  //diagonal izq atras
    columna = columnaActual + 1;
    fila = filaActual - 1;
     if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
      ){
  
        for(var f=0;f<9;f++){
          columna = columna - 1
          fila = fila + 1;
          for(var c=0;c<9;c++){
            if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
              // console.log("fila "+fila+" columna "+columna);
              // console.log("hay una ficha adelante, diagonal izq atras");
              return false;
            }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
              // console.log("diagonal izq atras");
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
            }
          }
        }

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
          columna = columnaActual - 1;
          fila = filaActual - 1;
          for(var f=0;f<9;f++){
            columna = columna + 1
            fila = fila + 1;
          // console.log("fila "+fila);
          // console.log("columna "+columna);
          for(var c=0;c<9;c++){
            if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
              // console.log("hay una ficha adelante, diagonal derecha atras");
              // console.log("f "+fila);
              // console.log("c "+columna);
              // console.log(matriz[fila][columna]);
              return false;
            }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
              // console.log("diagonal derecha atras");
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
            }
          }
        }
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
        columna = columnaActual - 1;
        fila = filaActual + 1;
        for(var f=0;f<9;f++){
          columna = columna + 1;
          fila = fila - 1;
          // console.log("fila "+fila);
          // console.log("columna "+columna);
          for(var c=0;c<9;c++){
            if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
              // console.log("hay una ficha adelante, diagonal columna dercha delante");
              return false;
            }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
              // console.log("diagonal columna dercha delante");
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
            }
          }
        }
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
          columna = columnaActual + 1;
          fila = filaActual + 1;
          for(var f=0;f<9;f++){
            columna = columna - 1
            fila = fila - 1;
            // console.log("fila "+fila);
            // console.log("columna "+columna);
            for(var c=0;c<9;c++){
              if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
                // console.log("hay una ficha adelante, diagonal columna izq delante");
                return false;
              }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
                // console.log("diagonal columna izq delante");
                return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
              }
            }
          } 
        } else {
          return false;
        }
}
}
AlfilPromocionado(filaActual: number, columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];
  let columna;
  let fila;

  switch(jugador){
    case "jugador1":
    //diagonal izq adelante
    columna = columnaActual + 1;
    fila = filaActual - 1;

    if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
    ){
    for(var f=0;f<9;f++){
      columna = columna - 1
      fila = fila + 1;
    for(var c=0;c<9;c++){
      if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
        // console.log("fila "+fila+" columna "+columna);
        // console.log("hay una ficha adelante, diagonal izq adelante");
        // console.log(matriz[fila][columna].permiso);
        return false;
      }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
        // console.log("diagonal izq adelante");
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
      }
    }
  }
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
  columna = columnaActual - 1;
  fila = filaActual - 1;
  for(var f=0;f<9;f++){
    columna = columna + 1
    fila = fila + 1;
    
    for(var c=0;c<9;c++){
      if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
        // console.log("hay una ficha adelante, diagonal derecha adelante");
        // console.log("f "+fila);
        // console.log("c "+columna);
        // console.log(matriz[fila][columna]);
        return false;
      }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
        // console.log("diagonal derecha adelante");
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
      }
    }
  }
}

    //diagonal columna dercha atras
  if(
    columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1 ||
    columnaFutura == columnaActual + 2 && filaFutura == filaActual - 2 ||
    columnaFutura == columnaActual + 3 && filaFutura == filaActual - 3 ||
    columnaFutura == columnaActual + 4 && filaFutura == filaActual - 4 ||
    columnaFutura == columnaActual + 5 && filaFutura == filaActual - 5 ||
    columnaFutura == columnaActual + 6 && filaFutura == filaActual - 6 ||
    columnaFutura == columnaActual + 7 && filaFutura == filaActual - 7 ||
    columnaFutura == columnaActual + 8 && filaFutura == filaActual - 8 
  ){
  columna = columnaActual - 1;
  fila = filaActual + 1;
  for(var f=0;f<9;f++){
    columna = columna + 1;
    fila = fila - 1;
   
    for(var c=0;c<9;c++){
      if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
        // console.log("hay una ficha adelante, diagonal columna dercha atras");
        return false;
      }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
        // console.log("diagonal columna dercha atras");
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
      }
    }
  }
}

    //diagonal columna izq atras
  if(
    columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ||
    columnaFutura == columnaActual - 2 && filaFutura == filaActual - 2 ||
    columnaFutura == columnaActual - 3 && filaFutura == filaActual - 3 ||
    columnaFutura == columnaActual - 4 && filaFutura == filaActual - 4 ||
    columnaFutura == columnaActual - 5 && filaFutura == filaActual - 5 ||
    columnaFutura == columnaActual - 6 && filaFutura == filaActual - 6 ||
    columnaFutura == columnaActual - 7 && filaFutura == filaActual - 7 ||
    columnaFutura == columnaActual - 8 && filaFutura == filaActual - 8 
  ){
  columna = columnaActual + 1;
  fila = filaActual + 1;
  for(var f=0;f<9;f++){
    columna = columna - 1
    fila = fila - 1;
    // console.log("fila "+fila);
    // console.log("columna "+columna);
    for(var c=0;c<9;c++){
      if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
        // console.log("hay una ficha adelante, diagonal columna izq atras");
        return false;
      }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador1"){
        // console.log("diagonal columna izq atras");
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
      }
    }
  } 
}
else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

    }
    //1 movimiento hacia la izquierda
else if(columnaFutura == columnaActual - 1 && filaFutura == filaActual){
  return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

    }  
    //1 movimiento hacia la delante 
else if (columnaFutura == columnaActual  && filaFutura == filaActual + 1){
  return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

}
//1 movimiento hacia atras
else if (columnaFutura == columnaActual  && filaFutura == filaActual - 1){
  return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

}
else{
  return false;
}
    //================================
    //jugador2
    //================================
      case "jugador2":
  //diagonal izq atras
    columna = columnaActual + 1;
    fila = filaActual - 1;
   if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1 ||
      columnaFutura == columnaActual - 2 && filaFutura == filaActual + 2 ||
      columnaFutura == columnaActual - 3 && filaFutura == filaActual + 3 ||
      columnaFutura == columnaActual - 4 && filaFutura == filaActual + 4 ||
      columnaFutura == columnaActual - 5 && filaFutura == filaActual + 5 ||
      columnaFutura == columnaActual - 6 && filaFutura == filaActual + 6 ||
      columnaFutura == columnaActual - 7 && filaFutura == filaActual + 7 ||
      columnaFutura == columnaActual - 8 && filaFutura == filaActual + 8 
    ){

      for(var f=0;f<9;f++){
        columna = columna - 1
        fila = fila + 1;
        for(var c=0;c<9;c++){
          if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
            // console.log("fila "+fila+" columna "+columna);
            // console.log("hay una ficha adelante, diagonal izq atras");
            return false;
          }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
            // console.log("diagonal izq atras ");
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
        }
      }
    }
  }
  //diagonal derecha atras
  
  if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1||
    columnaFutura == columnaActual + 2 && filaFutura == filaActual + 2 ||
    columnaFutura == columnaActual + 3 && filaFutura == filaActual + 3 ||
    columnaFutura == columnaActual + 4 && filaFutura == filaActual + 4 ||
    columnaFutura == columnaActual + 5 && filaFutura == filaActual + 5 ||
    columnaFutura == columnaActual + 6 && filaFutura == filaActual + 6 ||
    columnaFutura == columnaActual + 7 && filaFutura == filaActual + 7 ||
    columnaFutura == columnaActual + 8 && filaFutura == filaActual + 8 
    ){
      columna = columnaActual - 1;
      fila = filaActual - 1;
      for(var f=0;f<9;f++){
        columna = columna + 1
        fila = fila + 1;
        // console.log("fila "+fila);
        // console.log("columna "+columna);
        for(var c=0;c<9;c++){
          if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
            // console.log("hay una ficha adelante, diagonal derecha atras ");
            // console.log("f "+fila);
            // console.log("c "+columna);
            // console.log(matriz[fila][columna]);
            return false;
          }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
            // console.log("diagonal derecha atras ");
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
          }
        }
      }
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
      columna = columnaActual - 1;
      fila = filaActual + 1;
      for(var f=0;f<9;f++){
        columna = columna + 1;
        fila = fila - 1;
        // console.log("fila "+fila);
        // console.log("columna "+columna);
        for(var c=0;c<9;c++){
          if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
            // console.log("hay una ficha adelante, diagonal columna dercha delante");
            return false;
          }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
            // console.log("diagonal columna dercha delante ");
            return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
          }
        }
      }
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
        columna = columnaActual + 1;
        fila = filaActual + 1;
        for(var f=0;f<9;f++){
          columna = columna - 1
          fila = fila - 1;
          // console.log("fila "+fila);
          // console.log("columna "+columna);
          for(var c=0;c<9;c++){
            if(matriz[fila][columna].id != "" && ((fila!=filaActual)&&(columna != columnaActual)) && (fila != filaFutura && columna != columnaFutura)){
              // console.log("hay una ficha adelante, diagonal columna izq delante");
              return false;
            }else if(fila === filaFutura && columna === columnaFutura && matriz[fila][columna].permiso != "jugador2"){
              // console.log("diagonal columna izq delante");
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
            }
          }
        } 
      }  
        else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
        }
        //1 movimiento hacia la derecha
        else if(columnaFutura == columnaActual - 1 && filaFutura == filaActual){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
        }  
        //1 movimiento hacia la atras 
        else if (columnaFutura == columnaActual  && filaFutura == filaActual + 1){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
    }
        //1 movimiento hacia delante
      else if (columnaFutura == columnaActual  && filaFutura == filaActual - 1){
        return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
    }
    else{
      return false;
    }
  }
}
//===================================================================================================================//
//Torre y Torre Promocionada
//===================================================================================================================//
Torre(filaActual: number,columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];
  switch(jugador){
    case "jugador1":
  
      //recorre sobre las filas solamente
    if(filaFutura < filaActual  && columnaFutura == columnaActual ){
      for(var f=filaActual;f>=0;f--){
        // console.log("fila"+f);
        if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
          // console.log("no se puede");
          return false;
        }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador1" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }else if (filaFutura > filaActual  && columnaFutura == columnaActual) {
      for(var f=filaActual;f<=filaFutura;f++){
        // console.log("fila"+f);
        if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
          // console.log("no se puede");
          return false;
        }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador1" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }


    //recorre sobre columnas solamente
    if(columnaFutura < columnaActual && filaFutura == filaActual ){
      for(var c=columnaActual;c>=0;c--){
        if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
          return false;
        }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador1" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }else if (columnaFutura > columnaActual  && filaFutura == filaActual) {
      for(var c=columnaActual;c<=columnaFutura;c++){
        if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
          return false;
        }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador1" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }
     else {
    return false;
   }
  //================================
  //jugador2
  //================================
  case "jugador2":
    
    //recorre sobre las filas solamente
    if(filaFutura < filaActual  && columnaFutura == columnaActual ){
      for(var f=filaActual;f>=0;f--){
        // console.log("fila"+f);
        if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
          // console.log("no se puede");
          return false;
        }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }else if (filaFutura > filaActual  && columnaFutura == columnaActual) {
      for(var f=filaActual;f<=filaFutura;f++){
        // console.log("fila"+f);
        if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
          // console.log("no se puede");
          return false;
        }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }


    if(columnaFutura < columnaActual && filaFutura == filaActual ){
      for(var c=columnaActual;c>=0;c--){
        if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
          return false;
        }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }else if (columnaFutura > columnaActual  && filaFutura == filaActual) {
      for(var c=columnaActual;c<=columnaFutura;c++){
        if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
          return false;
        }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }
  else{
    return false;
  }
  
  }  
}
TorrePromocionada(filaActual: number,columnaActual: number, filaFutura: number, columnaFutura: number, jugador: string,matriz:any,capjug1,capjug2){
  let ficha = matriz[filaFutura][columnaFutura];

    switch(jugador){
      case "jugador1":
        //recorre sobre las filas solamente
        if(filaFutura < filaActual  && columnaFutura == columnaActual ){
          for(var f=filaActual;f>=0;f--){
            // console.log("fila"+f);
            if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
              // console.log("no se puede");
              return false;
            }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador1" ){
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
            }
          }
        }else if (filaFutura > filaActual  && columnaFutura == columnaActual) {
          for(var f=filaActual;f<=filaFutura;f++){
            // console.log("fila"+f);
            if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
              // console.log("no se puede");
              return false;
            }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador1" ){
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
            }
          }
        }
    
    
        //recorre sobre columnas solamente
        if(columnaFutura < columnaActual && filaFutura == filaActual ){
          for(var c=columnaActual;c>=0;c--){
            if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
              return false;
            }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador1" ){
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
            }
          }
        }else if (columnaFutura > columnaActual  && filaFutura == filaActual) {
          for(var c=columnaActual;c<=columnaFutura;c++){
            if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
              return false;
            }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador1" ){
              return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
            }
          }
        }
    //movimiento en l hacia Atras
    if(columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
    //movimiento el l hacia delante
    }else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
  }
  else{
    return false;
  }
//================================
//jugador2
//================================
    case "jugador2":
     //recorre sobre las filas solamente
      if(filaFutura < filaActual  && columnaFutura == columnaActual ){
        for(var f=filaActual;f>=0;f--){
          // console.log("fila"+f);
          if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
            // console.log("no se puede");
             return false;
         }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }else if (filaFutura > filaActual  && columnaFutura == columnaActual) {
      for(var f=filaActual;f<=filaFutura;f++){
        // console.log("fila"+f);
        if(matriz[f][columnaActual].id != "" && (filaFutura != f) && (filaActual != f)){
          // console.log("no se puede");
          return false;
        }else if(filaFutura === f && matriz[f][columnaActual].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }


    //recorre sobre columnas solamente
    if(columnaFutura < columnaActual && filaFutura == filaActual ){
      for(var c=columnaActual;c>=0;c--){
        if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
          return false;
        }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }else if (columnaFutura > columnaActual  && filaFutura == filaActual) {
      for(var c=columnaActual;c<=columnaFutura;c++){
        if(matriz[filaActual][c].id != "" && (columnaFutura != c) && (columnaActual != c)){
          return false;
        }else if(columnaFutura === c && matriz[filaActual][c].permiso != "jugador2" ){
          return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);      
        }
      }
    }
    //movimiento en l hacia Atras
    if(columnaFutura == columnaActual - 1 && filaFutura == filaActual + 1  ){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
  }
    else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual + 1 ){
      return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);
  }
    //movimiento en l hacia adelante
    if(columnaFutura == columnaActual - 1 && filaFutura == filaActual - 1 ){
       return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

  }
  else if(columnaFutura == columnaActual + 1 && filaFutura == filaActual - 1){
    return this._CapturarService.Capturar(ficha,jugador,capjug1,capjug2);

  }else{
        return false;
      }
    }
  }
}