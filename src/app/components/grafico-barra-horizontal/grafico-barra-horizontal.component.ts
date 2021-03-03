import { Component, OnInit, OnDestroy, Input } from '@angular/core';


@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy  {

  @Input() results: any[] = [];

 /* results: any[] = [
    {
      "name": "Juego1",
      "value": 8940000
    },
    {
      "name": "Juego2",
      "value": 5000000
    },
    {
      "name": "Juego3",
      "value": 7200000
    },
    {
      "name": "Juego4",
      "value": 7200000
    }
  ];*/

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Voto';

  colorScheme = 'nightLights';
  intervalo;
  constructor() {
  /*
    
    this.intervalo = setInterval(() => { 

      console.log('Pruebas');
      const newResul = [...this.results];
      
      for (let i in newResul) {
        newResul[i].value = Math.round(Math.random() * 500);
      }
      this.results = [...newResul];
    },1500);*/
  }

  onSelect(data): void {
 //   console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
   // console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
  //  console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy() {
   // clearInterval(this.intervalo);
  }
}
