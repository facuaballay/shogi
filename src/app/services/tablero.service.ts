import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableroService {
 
  tablero= new Array(9);
  fichas = [
    {id:"1",
    nombre:'Lancero',
    img:'assets/Fichas/Lancero.png',
    permiso:''
    },
    {id:"2",
    nombre:'Caballo',
    img:'assets/Fichas/Lancero.png',
    permiso:''
    },
    {id:"3",
    nombre:'G.Plata',
    img:'assets/Fichas/G.plata.png',
    permiso:''
    },
    {id:"4",
    nombre:'G.Oro',
    img:'assets/Fichas/G.oro.png',
    permiso:''
    },
    {id:"5",
    nombre:'Rey',
    img:'assets/Fichas/Rey.png',
    permiso:''
    },
    {id:"6",
    nombre:'G.Oro',
    img:'assets/Fichas/G.oro.png',
    permiso:''
    },
    {id:"7",
    nombre:'G.Plata',
    img:'assets/Fichas/G.plata.png',
    permiso:''
    },
    {id:"8",
    nombre:'Caballo',
    img:'assets/Fichas/Caballo.png',
    permiso:''
    },
    {id:"9",
    nombre:'Lancero',
    img:'assets/Fichas/Lancero.png',
    permiso:''
    },
    {id:"10",
    nombre:'Torre',
    img:'assets/Fichas/Torre.png',
    permiso:'',
    },
    {id:"11",
    nombre:'Alfil',
    img:'assets/Fichas/Alfil.png',
    permiso:''
    },
    {id:"12",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"13",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"14",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"15",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"16",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"17",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"18",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"19",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    },
    {id:"20",
    nombre:'Peon',
    img:'assets/Fichas/Peon.png',
    permiso:''
    }
  ]

  constructor() { }

  CrearTablero(){
//tablero 9x9
//creacion del tablero.
  let contador = 0;
  let fichasLugar = -1;

  for (let index = 0; index < 9; index++) {
    this.tablero[index] = new Array(9);
  }  

  for(var f=0;f<9;f++){
    for(var c=0;c<9;c++){
      if(contador < 9  ){
        this.tablero[f][c]= {
          id: this.fichas[++fichasLugar].id, 
          nombre: this.fichas[fichasLugar].nombre,
          img:this.fichas[fichasLugar].img,
          permiso: this.fichas[fichasLugar].permiso = "jugador1"
          };
      //tablero del 0 al 9    
      }
      else if(contador === 10 || contador === 16){
        this.tablero[f][c]= {
          id: this.fichas[++fichasLugar].id, 
          nombre: this.fichas[fichasLugar].nombre,
          img:this.fichas[fichasLugar].img,
          permiso: this.fichas[fichasLugar].permiso = "jugador1"
          };
      //tablero del 10 y 16    
      }
       else if(  contador >= 11 && contador <= 15 ){
          this.tablero[f][c]= {
            id:'', 
            nombre: '',
            permiso:"",
            img:""
          };                 
        //tablero del 11 y 15    
        }
       else if (contador > 17 && contador < 27){
         this.tablero[f][c]= {
           id: this.fichas[++fichasLugar].id, 
           nombre: this.fichas[fichasLugar].nombre,
           img:this.fichas[fichasLugar].img,
           permiso: this.fichas[fichasLugar].permiso = "jugador1"
          }; 
       //tablero del 17 y 27      
       }
      else if(contador > 53 && contador < 63){
        this.tablero[f][c]= {
            id: this.fichas[fichasLugar].id, 
            nombre: this.fichas[fichasLugar].nombre,
            img:this.fichas[fichasLugar].img,
            permiso: this.fichas[fichasLugar--].permiso = "jugador2"
          };
      //tablero del 53 y 63                        
      }
      else if(contador == 64 || contador === 70){
        this.tablero[f][c]= {
          id: this.fichas[fichasLugar].id, 
          img:this.fichas[fichasLugar].img,
          nombre: this.fichas[fichasLugar].nombre,
          permiso: this.fichas[fichasLugar--].permiso = "jugador2"
         };
      //tablero del 64 y 70   
      }
      else if(contador > 71 && contador < 81){
        this.tablero[f][c]= {
          id: this.fichas[fichasLugar].id, 
          nombre: this.fichas[fichasLugar].nombre,
          img:this.fichas[fichasLugar].img,
          permiso: this.fichas[fichasLugar--].permiso = "jugador2"
         };
      //tablero del 71 y 81    
      }
      else{
        this.tablero[f][c]={id:"", nombre: "",permiso:"",img:""};
        }
      contador++
      //total 81.
      }
    }
    return this.tablero;
  }
}

