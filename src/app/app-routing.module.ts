import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EstadisticaDeMonedaComponent } from 'src/app/estadistica-de-moneda/estadistica-de-moneda.component';
import { EstadisticasComponent } from 'src/app/Information/estadisticas/estadisticas.component';
import { InformacionDeExtraccionComponent } from 'src/app/informacion-de-extraccion/informacion-de-extraccion.component';

const routes: Routes = [
  { path: '', redirectTo: '/EstadisticaPopular', pathMatch: 'full' },
  { path: 'EstadisticaPopular', component: EstadisticasComponent },
  { path: 'EstadisticaMoneda', component: EstadisticaDeMonedaComponent },
  { path: 'InformacionExtraccion', component: InformacionDeExtraccionComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
