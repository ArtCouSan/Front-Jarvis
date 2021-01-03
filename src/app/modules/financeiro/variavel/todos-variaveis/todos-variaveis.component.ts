import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsolidadoRendaVariavelModel } from 'src/app/core/model/consolidado-renda-variavel.model';
import { RendaVariavelModel } from 'src/app/core/model/renda-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-todos-variaveis',
  templateUrl: './todos-variaveis.component.html',
  styleUrls: ['./todos-variaveis.component.scss']
})
export class TodosVariaveisComponent implements OnInit {

  constructor(private readonly rendaVariavelService: RendaVariavelService,
    public dialog: MatDialog) { }

  public consolidadoRendaVariavel: ConsolidadoRendaVariavelModel;

  public listaRendas: Array<RendaVariavelModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaVariavelService.pegarConsolidadoRendaVariavel().subscribe({
      next: result => {

        this.consolidadoRendaVariavel = result as ConsolidadoRendaVariavelModel;

        this.listaRendas = this.consolidadoRendaVariavel.renda;

        this.listaDadosLegenda = this.listaRendas.map(renda => renda.tipoRenda);
        this.listaDados = this.listaRendas.map(renda => renda.patrimonio);
        this.listaDadosCor = this.listaRendas.map(renda => renda.corReferencia);    
       
      }, error: error => {

      }
    });
 
  }

}
