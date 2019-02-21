import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LivreComponent} from './livre/livre.component';
import {AppComponent} from './app.component';
import {Notfound404Component} from './notfound404/notfound404.component';
import {HomeComponent} from './home/home.component';
import {LivreGallerieComponent} from './livre-gallerie/livre-gallerie.component';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'livres' , component : LivreComponent },
  { path : 'home' , component : HomeComponent },
  { path : 'gallerie' , component : LivreGallerieComponent },
  { path : 'notfound' , component : Notfound404Component },
  { path: '**', redirectTo: 'livres' , pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
