import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { DigitOnlyModule } from '@uiowa/digit-only';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/home/formulario/formulario.component';
import { TableroComponent } from './components/home/tablero/tablero.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReglasComponent } from './components/reglas/reglas.component';
import { ListaComponent } from './components/home/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    TableroComponent,
    ListaComponent,
    NavbarComponent,
    ReglasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DigitOnlyModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
