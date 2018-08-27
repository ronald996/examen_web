import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Http} from "@angular/http";
import { DatosMonedas } from '../DatosMonedas';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient, private httpClient: Http) { 
    this.getInformation();
  }

  /*Primera Parte  del Examen*/
  public getInformation(){
    return this.httpClient.get("https://api.blockchain.info/charts/avg-block-size?timespan=5weeks&rollingAverage=8hours&format=json").map(res => res.json().values);
  }

  public getPrecioMercado(){
    return this.httpClient.get("https://api.blockchain.info/charts/market-price?timespan=5weeks&rollingAverage=8hours&format=json").map(pre => pre.json().values);
  }

  public getTransacciones(){
    return this.httpClient.get("https://api.blockchain.info/charts/n-transactions?timespan=5weeks&rollingAverage=8hours&format=json").map(tran => tran.json().values);
  }

  public getMempool(){
    return this.httpClient.get("https://api.blockchain.info/charts/mempool-size?timespan=5weeks&rollingAverage=8hours&format=json").map(mem => mem.json().values);
  }

  /*Segunda Parte del Examen*/

  public getDatos(){
    return this.http.get<DatosMonedas>("https://api.blockchain.info/stats");
  }

  /*Tercera Parte del Examen*/
  result:any;
  getConteo() {
    return this.http.get('https://api.blockchain.info/pools?timespan=5days')
      .map(result => this.result = result);
  }
}
