import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shogi';

  tablero = new Array(9);
  constructor(){

    this.CrearTablero();
  }

  ngOnInit() {
  }

  fichas = [
    {id:"ficha1",
    nombre:'Lancero',
    permiso:''
    },
    {id:"ficha2",
    nombre:'Caballo',
    permiso:''
    },
    {id:"ficha3",
    nombre:'G.Plata',
    permiso:''
    },
    {id:"ficha4",
    nombre:'G.Oro',
    permiso:''
    },
    {id:"ficha5",
    nombre:'Rey',
    permiso:''
    },
    {id:"ficha6",
    nombre:'G.Oro',
    permiso:''
    },
    {id:"ficha7",
    nombre:'G.Plata',
    permiso:''
    },
    {id:"ficha8",
    nombre:'Caballo',
    permiso:''
    },
    {id:"ficha9",
    nombre:'Lancero',
    permiso:''
    },
    {id:"ficha10",
    nombre:'Torre',
    permiso:''
    },
    {id:"ficha11",
    nombre:'Alfil',
    permiso:''
    },
    {id:"ficha12",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha13",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha14",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha15",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha16",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha17",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha18",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha19",
    nombre:'Peon',
    permiso:''
    },
    {id:"ficha20",
    nombre:'Peon',
    permiso:''
    },


  ]
//tablero 9x9
//creacion del tablero.
CrearTablero(){
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
          permiso: this.fichas[fichasLugar].permiso = "jugador1"
          };
      //tablero del 0 al 9    
      }
      else if(contador === 10 || contador === 16){
        this.tablero[f][c]= {
          id: this.fichas[++fichasLugar].id, 
          nombre: this.fichas[fichasLugar].nombre,
          permiso: this.fichas[fichasLugar].permiso = "jugador1"
          };
      //tablero del 10 y 16    
      }
       else if(  contador >= 11 && contador <= 15 ){
          this.tablero[f][c]= {
            id:'', 
            nombre: ''
          };                 
        //tablero del 11 y 15    
        }
       else if (contador > 17 && contador < 27){
         this.tablero[f][c]= {
           id: this.fichas[++fichasLugar].id, 
           nombre: this.fichas[fichasLugar].nombre,
           permiso: this.fichas[fichasLugar].permiso = "jugador1"
          }; 
       //tablero del 17 y 27      
       }
      else if(contador > 53 && contador < 63){
        this.tablero[f][c]= {
            id: this.fichas[fichasLugar].id, 
            nombre: this.fichas[fichasLugar--].nombre,
            permiso: this.fichas[fichasLugar].permiso = "jugador2"
          };
      //tablero del 53 y 63                        
      }
      else if(contador == 64 || contador === 70){
        this.tablero[f][c]= {
          id: this.fichas[fichasLugar].id, 
          nombre: this.fichas[fichasLugar--].nombre,
          permiso: this.fichas[fichasLugar].permiso = "jugador2"
         };
      //tablero del 64 y 70   
      }
      else if(contador > 71 && contador < 81){
        this.tablero[f][c]= {
          id: this.fichas[fichasLugar].id, 
          permiso: this.fichas[fichasLugar].permiso = "jugador2",
          nombre: this.fichas[fichasLugar--].nombre
         };
      //tablero del 71 y 81    
      }
      else{
        this.tablero[f][c]={id:"", nombre: ""};
        }
      contador++
      //total 81.
      }
    }
  console.log(this.tablero)
  }
}





