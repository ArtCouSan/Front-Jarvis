import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ConsolidadoRendaVariavelModel } from 'src/app/core/model/consolidado-renda-variavel.model';

@Component({
  selector: 'app-todos-variaveis',
  templateUrl: './todos-variaveis.component.html',
  styleUrls: ['./todos-variaveis.component.scss']
})
export class TodosVariaveisComponent implements OnInit {

  constructor(private readonly rendaVariavelService: RendaVariavelService,
    public dialog: MatDialog) { }

  public consolidadoFiis: ConsolidadoFiisModel;

  public listaPapeis: Array<PapelVariavelModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaVariavelService.pegarConsolidadoFiis().subscribe({
      next: result => {

        this.consolidadoFiis = result as ConsolidadoRendaVariavelModel;

        this.listaPapeis = this.consolidadoFiis.papeis;

        this.listaDadosLegenda = this.listaPapeis.map(papel => papel.ticket);
        this.listaDados = this.listaPapeis.map(papel => papel.valorAtual);
        this.listaDadosCor = this.listaPapeis.map(papel => papel.papelCorDeReferencia);    
       
      }, error: error => {

      }
    });
 
  }

}
