import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as Chart from 'chart.js';
import { ConsolidadoRendaFixaModel } from 'src/app/core/model/consolidado-renda-fixa.model';
import { RendaFixaModel } from 'src/app/core/model/renda-fixa.model';
import { RendaFixaService } from 'src/app/core/services/renda-fixa.service';

@Component({
  selector: 'app-todos-fixa',
  templateUrl: './todos-fixa.component.html',
  styleUrls: ['./todos-fixa.component.scss']
})
export class TodosFixaComponent implements OnInit {

  constructor(private readonly rendaFixaService: RendaFixaService,
    public dialog: MatDialog) { }

  public consolidadoRendaFixa: ConsolidadoRendaFixaModel;

  public listaRendas: Array<RendaFixaModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaFixaService.pegarConsolidadoRendaFixa().subscribe({
      next: result => {

        this.consolidadoRendaFixa = result as ConsolidadoRendaFixaModel;

        this.listaRendas = this.consolidadoRendaFixa.renda;

        this.listaDadosLegenda = this.listaRendas.map(renda => renda.tipoRenda);
        this.listaDados = this.listaRendas.map(renda => renda.patrimonio);
        this.listaDadosCor = this.listaRendas.map(renda => renda.corReferencia);    
       
      }, error: error => {

      }
    });
 
  }
  
}
