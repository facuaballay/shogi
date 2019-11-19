import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReglasComponent } from './components/reglas/reglas.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [

  { path: 'reglas', component:ReglasComponent},
   {path: 'home', component:HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }