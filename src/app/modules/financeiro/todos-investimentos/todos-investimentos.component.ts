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

  public consolidadoRendaGeral: ConsolidadoRendasModel;

  public listaRendas: Array<RendaModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaGeralService.pegarConsolidadoRenda().subscribe({
      next: result => {

        this.consolidadoRendaGeral = result as ConsolidadoRendasModel;

        this.listaRendas = this.consolidadoRendaGeral.renda;

        this.listaDadosLegenda = this.listaRendas.map(renda => renda.tipoRenda);
        this.listaDados = this.listaRendas.map(renda => renda.patrimonio);
        this.listaDadosCor = this.listaRendas.map(renda => renda.corReferencia);    
       
      }, error: error => {

      }
    });
 
  }


}


