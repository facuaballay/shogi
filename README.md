# Shogi Eventbrite

Este shogi esta hecho Angular version 8.1.2.

## Para correr el proyecto instalar las dependencias necesarias.

npm Install

## Funcionalidades implementadas
- movimiento de piezas
- movimiento de piezas promocionadas
- re introducir piezas capturadas
- jaque mate

## Intrucciones
1.correr el npm install
2.Configurar sweet alert:
entrar a la carpeta :  Node_modules/sweetalert/sweetalert.d.ts
y remplazar el contenido:
 
import swal, { SweetAlert } from "./core";

declare global {

  const swal: SweetAlert;
  
  const sweetAlert: SweetAlert;
  
}



export default swal;






