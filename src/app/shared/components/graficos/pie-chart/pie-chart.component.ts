import { Component, Input, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {

  public PieChart;
  @Input() public listaDadosLegenda: Array<string>;
  @Input() public listaDados: any;
  @Input() public listaDadosCor: Array<string>;
  @Input() public legenda: string;
  @Input() public titulo: string;
  @Input() public id_: string;

  constructor() { }

  ngAfterViewInit() {

    this.PieChart = new Chart(this.id_, {
      type: 'pie',
      data: {
        labels: this.listaDadosLegenda,
        datasets: [{
          label: this.legenda,
          data: this.listaDados,
          borderWidth: 1,
          backgroundColor: this.listaDadosCor
        }]
      },
      options: {
        title: {
          display: true,
          text: this.titulo,
          position: 'bottom',
          fontSize: 14,
          fontColor: 'black',
          fontFamily: 'cursive'
        }
      }
    });

  }

}
