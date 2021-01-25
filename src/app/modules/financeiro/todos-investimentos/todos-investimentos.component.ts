import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Chart } from 'chart.js';
import { ConsolidadoRendasModel } from 'src/app/core/model/consolidado-rendas.model';
import { RendaModel } from 'src/app/core/model/renda.model';
import { RendaGeralService } from 'src/app/core/services/renda-geral.service';

@Component({
  selector: 'app-todos-investimentos',
  templateUrl: './todos-investimentos.component.html',
  styleUrls: ['./todos-investimentos.component.scss']
})
export class TodosInvestimentosComponent implements OnInit {
  
  constructor(private readonly rendaGeralService: RendaGeralService,
    public dialog: MatDialog) { }

  public consolidadoRendaGeral: ConsolidadoRendasModel = {
    patrimonioTotal: [{
      value: 0
    }],
    renda: []
  };

  public listaRendas: Array<RendaModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaGeralService.pegarConsolidadoRenda().subscribe({
      next: result => {

        if(result.renda.length > 0) {

          this.consolidadoRendaGeral = result as ConsolidadoRendasModel;

          this.listaRendas = this.consolidadoRendaGeral.renda;
  
          this.listaDadosLegenda = this.listaRendas.map(renda => renda.tipoRenda);
          this.listaDados = this.listaRendas.map(renda => renda.patrimonio);
          this.listaDadosCor = this.listaRendas.map(renda => renda.corReferencia);    
         
        } else {
          
          this.listaRendas = [];
          this.listaDadosLegenda = [];
          this.listaDados = [];
          this.listaDadosCor = [];

        }
  
      }, error: error => {

        console.log(error);

      }
    });
 
  }


}


