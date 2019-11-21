import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperPromocionesService {

  constructor() { }



PiezasJugador1 = {
  Peonpromocionado:false,
  Generalplatapromocionado: false,
  Lanceropromocionado:false,
  Caballopromocionado:false,
  Alfilpromocionado : false,
  Torrepromocionada:false
}
PiezasJugador2 = {
  Peonpromocionado:false,
  Generalplatapromocionado: false,
  Lanceropromocionado:false,
  Caballopromocionado:false,
  Alfilpromocionado : false,
  Torrepromocionada:false
}



//============================================================================================================//
//                                          Peon
//============================================================================================================//

PeonPromocion(ficha,fila){
  
  if (ficha["permiso"] === "jugador1") {
    switch(fila.valueOf()){
      case 8 :
        swal('Pieza Promocionada','','success');
        ficha["nombre"] = "G.Oro";
        ficha["img"] = "assets/Fichas/Peon-promocionado.png";
    break;
     
      case 7 :
          if(this.PiezasJugador1.Peonpromocionado === false){

            swal('Queres Promocionar La Ficha??','','warning',{
              buttons: {
                Cancelar:{value:"Cancelar"},
                Confirmar:{
                  value: "Confirmar",},
              },
            }).then(value=>{
             if(value === "Confirmar"){
              swal('Pieza Promocionada','','success');
              ficha["nombre"] = "G.Oro";
              ficha["img"] = "assets/Fichas/Peon-promocionado.png";
              this.PiezasJugador1.Peonpromocionado = true;
             }
            }).catch(res=>{
              console.log(res);
              return true;
            })
          }

    break;
        
      case 6 :
          if(this.PiezasJugador1.Peonpromocionado === false){

            swal('Queres Promocionar La Ficha??','','warning',{
              buttons: {
                Cancelar:{value:"Cancelar"},
                Confirmar:{
                  value: "Confirmar",},
              },
            }).then(value=>{
             if(value === "Confirmar"){
              swal('Pieza Promocionada','','success');
              ficha["nombre"] = "G.Oro";
              ficha["img"] = "assets/Fichas/Peon-promocionado.png";
              this.PiezasJugador1.Peonpromocionado = true;
             }
            }).catch(res=>{
              console.log(res);
              return true;
            })
          }
    break;    
    }      
   }
  //jugador 2    
  if (ficha["permiso"] === "jugador2") {
    switch(fila.valueOf()){
      case 0 :
          swal('Pieza Promocionada','','success');
     ficha["nombre"] = "G.Oro";
      ficha["img"] = "assets/Fichas/Peon-promocionado.png";
    break;
  
     case 1 :
        if(this.PiezasJugador2.Peonpromocionado === false){

          swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
                value: "Confirmar",},
            },
          }).then(value=>{
           if(value === "Confirmar"){
            swal('Pieza Promocionada','','success');
            ficha["nombre"] = "G.Oro";
            ficha["img"] = "assets/Fichas/Peon-promocionado.png";
            this.PiezasJugador2.Peonpromocionado = true;
           }
          }).catch(res=>{
            console.log(res);
            return true;
          })
        }
    break;
  
        case 2 :
            if(this.PiezasJugador2.Peonpromocionado === false){

              swal('Queres Promocionar La Ficha??','','warning',{
                buttons: {
                  Cancelar:{value:"Cancelar"},
                  Confirmar:{
                    value: "Confirmar",},
                },
              }).then(value=>{
               if(value === "Confirmar"){
                swal('Pieza Promocionada','','success');
                ficha["nombre"] = "G.Oro";
                ficha["img"] = "assets/Fichas/Peon-promocionado.png";
                this.PiezasJugador2.Peonpromocionado = true;
               }
              }).catch(res=>{
                console.log(res);
                return true;
              })
            }
    break;  
    }      
  }
}
//============================================================================================================//
//                                      General De Plata
//============================================================================================================//
GeneralPlataPromocion(ficha,fila){


//jugador1
  if (ficha["permiso"] === "jugador1") {
    switch(fila.valueOf()){
      case 8 :
        
        if(this.PiezasJugador1.Generalplatapromocionado === false){

          swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
            value: "Confirmar",},
        },
      }).then(value=>{
      if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
          ficha["nombre"] = "G.Oro";
          ficha["img"] = "assets/Fichas/G.plata-promocionado.png";
          this.PiezasJugador1.Generalplatapromocionado = true;
       }
      })
    }
  break;
 
  case 7 :
      if(this.PiezasJugador1.Generalplatapromocionado === false){

        swal('Queres Promocionar La Ficha??','','warning',{
        buttons: {
          Cancelar:{value:"Cancelar"},
          Confirmar:{
          value: "Confirmar",},
      },
    }).then(value=>{
    if(value === "Confirmar"){
        swal('Pieza Promocionada','','success');
        ficha["nombre"] = "G.Oro";
        ficha["img"] = "assets/Fichas/G.plata-promocionado.png";
        this.PiezasJugador1.Generalplatapromocionado = true;
     }
    })
  }
  break;
    
  case 6 :
      if(this.PiezasJugador1.Generalplatapromocionado === false){

        swal('Queres Promocionar La Ficha??','','warning',{
        buttons: {
          Cancelar:{value:"Cancelar"},
          Confirmar:{
          value: "Confirmar",},
      },
    }).then(value=>{
    if(value === "Confirmar"){
        swal('Pieza Promocionada','','success');
        ficha["nombre"] = "G.Oro";
        ficha["img"] = "assets/Fichas/G.plata-promocionado.png";
        this.PiezasJugador1.Generalplatapromocionado = true;
     }
    })
  }
    break;    
  }      
}
//jugador 2    
  if (ficha["permiso"] === "jugador2") {
    switch(fila.valueOf()){
      case 0 :
          if(this.PiezasJugador2.Generalplatapromocionado === false){

            swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
        if(value === "Confirmar"){
            swal('Pieza Promocionada','','success');
            ficha["nombre"] = "G.Oro";
            ficha["img"] = "assets/Fichas/G.plata-promocionado.png";
            this.PiezasJugador2.Generalplatapromocionado = true;
         }
        })
      }
  break;

    case 1 :
        if(this.PiezasJugador2.Generalplatapromocionado === false){

          swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
            value: "Confirmar",},
        },
      }).then(value=>{
      if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
          ficha["nombre"] = "G.Oro";
          ficha["img"] = "assets/Fichas/G.plata-promocionado.png";
          this.PiezasJugador2.Generalplatapromocionado = true;
       }
      })
    }
  break;

    case 2 :
          if(this.PiezasJugador2.Generalplatapromocionado === false){

            swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
        if(value === "Confirmar"){
            swal('Pieza Promocionada','','success');
            ficha["nombre"] = "G.Oro";
            ficha["img"] = "assets/Fichas/G.plata-promocionado.png";
            this.PiezasJugador2.Generalplatapromocionado = true;
         }
        })
      }
  break;  

    }      
  }
}
//============================================================================================================//
//                                            Lancero
//============================================================================================================//
LanceroPromocion(ficha,fila){
if (ficha["permiso"] === "jugador1") {
  switch(fila.valueOf()){
    case 8 :
      swal('Pieza Promocionada','','success');
       ficha["nombre"] = "G.Oro";
       ficha["img"] = "assets/Fichas/Lancero-promocionado.png";

  break; 
   
    case 7 :
      if(this.PiezasJugador1.Lanceropromocionado === false){
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
          ficha["nombre"] = "G.Oro";
          ficha["img"] = "assets/Fichas/Lancero-promocionado.png";
          this.PiezasJugador1.Lanceropromocionado = true;
         }
        })

      }
  break;
      
    case 6 :
        if(this.PiezasJugador1.Lanceropromocionado === false){
          swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
                value: "Confirmar",},
            },
          }).then(value=>{
           if(value === "Confirmar"){
            swal('Pieza Promocionada','','success');
            ficha["nombre"] = "G.Oro";
            ficha["img"] = "assets/Fichas/Lancero-promocionado.png";
            this.PiezasJugador1.Lanceropromocionado = true;
           }
          })
  
        }
  break;    
  }      
 }
//jugador 2    
if (ficha["permiso"] === "jugador2") {
  switch(fila.valueOf()){
    case 0 :
      swal('Pieza Promocionada','','success');
        ficha["nombre"] = "G.Oro";
        ficha["img"] = "assets/Fichas/Lancero-promocionado.png";
  break;

   case 1 :
      if(this.PiezasJugador2.Lanceropromocionado === false){
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
          ficha["nombre"] = "G.Oro";
          ficha["img"] = "assets/Fichas/Lancero-promocionado.png";
          this.PiezasJugador2.Lanceropromocionado = true;
         }
        })

      }
  break;

      case 2 :
          if(this.PiezasJugador2.Lanceropromocionado === false){
            swal('Queres Promocionar La Ficha??','','warning',{
              buttons: {
                Cancelar:{value:"Cancelar"},
                Confirmar:{
                  value: "Confirmar",},
              },
            }).then(value=>{
             if(value === "Confirmar"){
              swal('Pieza Promocionada','','success');
              ficha["nombre"] = "G.Oro";
              ficha["img"] = "assets/Fichas/Lancero-promocionado.png";
              this.PiezasJugador2.Lanceropromocionado = true;
             }
            })
    
          }
  break;  

  }      
 }
}
//============================================================================================================//
//                                              Caballo
//============================================================================================================//
Caballo(ficha,fila){
if (ficha["permiso"] === "jugador1") {
  switch(fila.valueOf()){
    case 8 :
      swal('Pieza Promocionada','','success');
       ficha["nombre"] = "G.Oro";
       ficha["img"] = "assets/Fichas/Caballo-promocionado.png";

  break; 
   
    case 7 :
      swal('Pieza Promocionada','','success');
      ficha["nombre"] = "G.Oro";
      ficha["img"] = "assets/Fichas/Caballo-promocionado.png";
  break;
      
    case 6 :
      if(this.PiezasJugador1.Caballopromocionado === false){

        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
          ficha["nombre"] = "G.Oro";
          ficha["img"] = "assets/Fichas/Caballo-promocionado.png";
          this.PiezasJugador2.Caballopromocionado = true;
         }
        })
      }
  break;    
  }      
 }
//jugador 2    
if (ficha["permiso"] === "jugador2") {
  switch(fila.valueOf()){
    case 0 :
      swal('Pieza Promocionada','','success');
        ficha["nombre"] = "G.Oro";
        ficha["img"] = "assets/Fichas/Caballo-promocionado.png";
  break;

   case 1 :
    swal('Pieza Promocionada','','success');
      ficha["nombre"] = "G.Oro";
      ficha["img"] = "assets/Fichas/Caballo-promocionado.png";
  break;

      case 2 :
        
          if(this.PiezasJugador2.Caballopromocionado === false){

            swal('Queres Promocionar La Ficha??','','warning',{
              buttons: {
                Cancelar:{value:"Cancelar"},
                Confirmar:{
                  value: "Confirmar",},
              },
            }).then(value=>{
             if(value === "Confirmar"){
              swal('Pieza Promocionada','','success');
              ficha["nombre"] = "G.Oro";
              ficha["img"] = "assets/Fichas/Caballo-promocionado.png";
              this.PiezasJugador2.Caballopromocionado = true;
             }
            })
          }
  break;  

  }      
 }
}
//============================================================================================================//
//                                               Alfil
//============================================================================================================//
AlfilPromocionado(ficha,fila){

  //Jugador1
  if (ficha["permiso"] === "jugador1" ) {

    switch(fila.valueOf()){
       
      case 8: 
      if(this.PiezasJugador1.Alfilpromocionado === false){
       
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
           ficha["nombre"] = "AlfilPromocionado";
           ficha["img"] = "assets/Fichas/Alfil-Promocionado.png";
           this.PiezasJugador1.Alfilpromocionado = true;
         
           
         }
        })
      }

      
      break;

       case 7 : 
        if(this.PiezasJugador1.Alfilpromocionado=== false){
         
          swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
                value: "Confirmar",},
              },
            }).then(value=>{
              if(value === "Confirmar"){
                swal('Pieza Promocionada','','success');
                ficha["nombre"] = "AlfilPromocionado";
                ficha["img"] = "assets/Fichas/Alfil-Promocionado.png";
                this.PiezasJugador1.Alfilpromocionado = true;
              }
            })    
        }
      break;
      case 6 :
          if(this.PiezasJugador1.Alfilpromocionado === false){
           
            swal('Queres Promocionar La Ficha??','','warning',{
              buttons: {
                Cancelar:{value:"Cancelar"},
                Confirmar:{
                  value: "Confirmar",},
              },
            }).then(value=>{
             if(value === "Confirmar"){
              swal('Pieza Promocionada','','success');
               ficha["nombre"] = "AlfilPromocionado";
               ficha["img"] = "assets/Fichas/Alfil-Promocionado.png";
               this.PiezasJugador1.Alfilpromocionado = true;
          }
        })
        
      }
    }
  }

//Jugador2

if (ficha["permiso"] === "jugador2" ) {

switch(fila.valueOf()){
   //si fila es 2
  case 0:
      if(this.PiezasJugador2.Alfilpromocionado === false){
       
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
           ficha["nombre"] = "AlfilPromocionado";
           ficha["img"] = "assets/Fichas/Alfil-Promocionado.png";
           this.PiezasJugador2.Alfilpromocionado = true;
         
           
         }
        })
      }
  break;
   //si fila es 1
  case 1 : 
  if(this.PiezasJugador2.Alfilpromocionado === false){
       
    swal('Queres Promocionar La Ficha??','','warning',{
      buttons: {
        Cancelar:{value:"Cancelar"},
        Confirmar:{
          value: "Confirmar",},
      },
    }).then(value=>{
     if(value === "Confirmar"){
      swal('Pieza Promocionada','','success');
       ficha["nombre"] = "AlfilPromocionado";
       ficha["img"] = "assets/Fichas/Alfil-Promocionado.png";
       this.PiezasJugador2.Alfilpromocionado = true;    
     }
    })
  }
  break;
  //si fila es 0
  case 2 :
      if(this.PiezasJugador2.Alfilpromocionado === false){
       
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
           ficha["nombre"] = "AlfilPromocionado";
           ficha["img"] = "assets/Fichas/Alfil-Promocionado.png";
           this.PiezasJugador2.Alfilpromocionado = true;    
         }
        })
      }
    }  
  }    
}
//============================================================================================================//
//                                               Torre
//============================================================================================================//
TorrePromocionada(ficha,fila){
//Jugador1

  if (ficha["permiso"] === "jugador1" ) {
    switch(fila.valueOf()){
  
    case 8: 
    if(this.PiezasJugador1.Torrepromocionada === false){
      swal('Queres Promocionar La Ficha??','','warning',{
        buttons: {
          Cancelar:{value:"Cancelar"},
          Confirmar:{
            value: "Confirmar",},
        },
      }).then(value=>{
       if(value === "Confirmar"){
        swal('Pieza Promocionada','','success');
         ficha["nombre"] = "TorrePromocionada";
         ficha["img"] = "assets/Fichas/Torre-promocionada.png";
        this.PiezasJugador1.Torrepromocionada = true;
       }
      })
    }
  break;
     //si es 7
    case 7 : 
    if(this.PiezasJugador1.Torrepromocionada === false){
      swal('Queres Promocionar La Ficha??','','warning',{
        buttons: {
          Cancelar:{value:"Cancelar"},
          Confirmar:{
            value: "Confirmar",},
        },
      }).then(value=>{
       if(value === "Confirmar"){
        swal('Pieza Promocionada','','success');
         ficha["nombre"] = "TorrePromocionada";
         ficha["img"] = "assets/Fichas/Torre-promocionada.png";
        this.PiezasJugador1.Torrepromocionada = true;
       }
      })
    }
  break;
    case 6 :
        if(this.PiezasJugador1.Torrepromocionada === false){
          swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
                value: "Confirmar",},
            },
          }).then(value=>{
           if(value === "Confirmar"){
            swal('Pieza Promocionada','','success');
             ficha["nombre"] = "TorrePromocionada";
             ficha["img"] = "assets/Fichas/Torre-promocionada.png";
            this.PiezasJugador1.Torrepromocionada = true;
           }
          })
        }
  break;
  }  
}

//Jugador2

  if (ficha["permiso"] === "jugador2" ) {
    switch(fila.valueOf()){
      case 0: 
      if(this.PiezasJugador2.Torrepromocionada === false){
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
           ficha["nombre"] = "TorrePromocionada";
           ficha["img"] = "assets/Fichas/Torre-promocionada.png";
          this.PiezasJugador2.Torrepromocionada = true;
         }
        })
      }
    break;
 //si fila es 1
      case 1 : 
      if(this.PiezasJugador2.Torrepromocionada === false){
        swal('Queres Promocionar La Ficha??','','warning',{
          buttons: {
            Cancelar:{value:"Cancelar"},
            Confirmar:{
              value: "Confirmar",},
          },
        }).then(value=>{
         if(value === "Confirmar"){
          swal('Pieza Promocionada','','success');
           ficha["nombre"] = "TorrePromocionada";
           ficha["img"] = "assets/Fichas/Torre-promocionada.png";
          this.PiezasJugador2.Torrepromocionada = true;
         }
        })
      }
    break;

    case 2 :
        if(this.PiezasJugador2.Torrepromocionada === false){
          swal('Queres Promocionar La Ficha??','','warning',{
            buttons: {
              Cancelar:{value:"Cancelar"},
              Confirmar:{
                value: "Confirmar",},
            },
          }).then(value=>{
           if(value === "Confirmar"){
            swal('Pieza Promocionada','','success');
             ficha["nombre"] = "TorrePromocionada";
             ficha["img"] = "assets/Fichas/Torre-promocionada.png";
            this.PiezasJugador2.Torrepromocionada = true;
           }
          })
        }
    break;
    }  
  }    
}

}
