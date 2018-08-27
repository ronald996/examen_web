import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  bloque :any = {};
  precio :any = {};
  transaciones :any = {};
  mempool_size :any = {};

  constructor(private datos: DatosService) { }

  ngOnInit() {
    this.datos.getInformation().subscribe(res => { this.bloque = res;});
    this.datos.getPrecioMercado().subscribe(pre => { this.precio = pre;});
    this.datos.getTransacciones().subscribe(tran => { this.transaciones = tran;});
    this.datos.getMempool().subscribe(mem => { this.mempool_size = mem;});
  }

}
