import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatosService } from './Servicios/datos.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EstadisticasComponent } from './Information/estadisticas/estadisticas.component';
import { AppRoutingModule } from './/app-routing.module';
import { EstadisticaDeMonedaComponent } from './estadistica-de-moneda/estadistica-de-moneda.component';
import { InformacionDeExtraccionComponent } from './informacion-de-extraccion/informacion-de-extraccion.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    EstadisticasComponent,
    EstadisticaDeMonedaComponent,
    InformacionDeExtraccionComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, AppRoutingModule, ChartsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
