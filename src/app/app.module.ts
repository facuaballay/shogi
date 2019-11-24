import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app.routes';
//digitonly
import { DigitOnlyModule } from '@uiowa/digit-only';
//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/home/formulario/formulario.component';
import { TableroComponent } from './components/home/tablero/tablero.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ReglasComponent } from './components/reglas/reglas.component';
import { ListaComponent } from './components/home/lista/lista.component';


//toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

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
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
