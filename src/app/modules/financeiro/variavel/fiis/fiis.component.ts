import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';
@Component({
  selector: 'app-fiis',
  templateUrl: './fiis.component.html',
  styleUrls: ['./fiis.component.scss']
})
export class FiisComponent implements OnInit {

  constructor(private readonly rendaVariavelService: RendaVariavelService) { }

  PieChart;

  public dataSource: Array<PapelVariavelModel>;

  ngOnInit() {

    // Listar papeis
    this.rendaVariavelService.listarPapeisRendaVariavel().subscribe({
      next: result => {

        this.dataSource = result;
        const listaDadosLegenda = this.dataSource.map(papel => papel.ticket);
        const listaDados = this.dataSource.map(papel => papel.valorAtual);
        const listaDadosCor = this.dataSource.map(papel => papel.papelCorDeReferencia);

        let data = {
          labels: listaDadosLegenda,
          datasets: [{
            label: 'R$ #',
            data: listaDados,
            borderWidth: 1,
            backgroundColor: listaDadosCor
          }]
        };

        this.PieChart = new Chart("pieChart", {
          type: 'pie',
          data: data,
          options: {
            title: {
              display: true,
              text: 'Grafico de valor total',
              position: 'bottom',
              fontSize: 14,
              fontColor: 'black'              
            }
          }
        });

      }, error: error => {

      }
    });
 
  }

}
