import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {AccordionModule} from 'primeng/accordion';
import { LivreComponent } from './livre/livre.component';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {DropdownModule, InputMaskModule, InputSwitchModule, InputTextModule, MultiSelectModule, TTSelectableRow} from 'primeng/primeng';
import {LivreService} from './Services/livre.service';
import { Notfound404Component } from './notfound404/notfound404.component';
import {StoreModule } from '@ngrx/store' ;
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {livreReducer} from './livre/store/reducers/livre.reducer';
import { HomeComponent } from './home/home.component';
import { LivreGallerieComponent } from './livre-gallerie/livre-gallerie.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    Notfound404Component,
    HomeComponent,
    LivreGallerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    TableModule,
    SliderModule ,
    DropdownModule,
    MultiSelectModule,
    InputTextModule,
    InputSwitchModule,
    InputMaskModule,
    StoreModule.forRoot({livreReducer}),
    StoreDevtoolsModule.instrument({
      name: 'Livre',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
