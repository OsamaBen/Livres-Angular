import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivreRoutingModule } from './livre-routing.module';
import {LivreComponent} from './livre.component';
import {StoreModule} from '@ngrx/store';
import {livreReducer} from './store/reducers/livre.reducer';

@NgModule({
  declarations: [LivreComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('LivreState', livreReducer)
  ],
  exports: [LivreComponent]
})
export class LivreModule { }
