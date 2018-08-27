import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { DatosMonedas } from '../DatosMonedas';

@Component({
  selector: 'app-estadistica-de-moneda',
  templateUrl: './estadistica-de-moneda.component.html',
  styleUrls: ['./estadistica-de-moneda.component.css']
})
export class EstadisticaDeMonedaComponent implements OnInit {

  info: DatosMonedas = new DatosMonedas();

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.datos.getDatos().subscribe(data => {this.info = data});
  }

}
