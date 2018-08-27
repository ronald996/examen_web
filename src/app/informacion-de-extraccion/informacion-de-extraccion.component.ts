import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/Servicios/datos.service';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-informacion-de-extraccion',
  templateUrl: './informacion-de-extraccion.component.html',
  styleUrls: ['./informacion-de-extraccion.component.css']
})
export class InformacionDeExtraccionComponent { 
  data: any = [];
  objectKeys = Object.keys;
  datos: any;
  

  public pieChartLabels:string[] = ['AntPool', 'BTC.TOP', 'BTC.com', 'F2Pool', 'SlushPool', 'Bixin', 'BitClub Network', 'Unknown', 'BitFury'
  , 'ViaBTC', 'KanoPool', 'CKPool', 'DPOOL', 'BTCC Pool', 'Bitcoin.com', '58COIN', 'Poolin'];
  public pieChartData:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  public pieChartType:string = 'pie';

  constructor(private _data: DatosService) {
    this._data.getConteo().subscribe(res =>{
      this.pieChartData = [Number(res["AntPool"]), Number(res["BTC.com"]),Number(res["BTC.TOP"]),Number(res["F2Pool"]),
      Number(res["SlushPool"]),Number(res["Bixin"]),Number(res["BitClub Network"]),Number(res["Unknown"]),Number(res["BitFury"]),
      Number(res["ViaBTC"]),Number(res["KanoPool"]),Number(res["CKPool"]),Number(res["DPOOL"]),Number(res["BTCC Pool"]),Number(res["Bitcoin.com"]),Number(res["58COIN"]),
      Number(res["Poolin"])]
    });
  }


 



 
 /* // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }*/

  ngOnInit() {
    this._data.getConteo()
      .subscribe(res => {
        this.datos = res;
        console.log(res);
      });
  }

}
