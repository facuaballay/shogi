# Shogi Eventbrite

Este shogi esta hecho Angular version 8.1.2.

## Para correr el proyecto instalar las dependencias necesarias.

npm Install

## Desplegar el proyecto en angular

ng serve

## Instrucciones
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

## Funcionalidades implementadas
- movimiento de piezas segun las reglas.
- movimiento de piezas promocionadas segun las reglas.
- re introducir piezas capturadas y si es una pieza promocionada le saca su promocion.
- jaque mate





