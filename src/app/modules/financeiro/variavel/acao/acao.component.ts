import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsolidadoAcoesModel } from 'src/app/core/model/consolidado-acoes.model';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';
import { InserirAcaoComponent } from 'src/app/shared/components/modal/acao/inserir-acao/inserir-acao.component';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

  constructor(private readonly rendaVariavelService: RendaVariavelService,
    public dialog: MatDialog) { }

  public consolidadoAcoes: ConsolidadoAcoesModel;

  public listaPapeis: Array<PapelVariavelModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaVariavelService.pegarConsolidadoFiis().subscribe({
      next: result => {

        this.consolidadoAcoes = result as ConsolidadoAcoesModel;

        this.listaPapeis = this.consolidadoAcoes.papeis;

        this.listaDadosLegenda = this.listaPapeis.map(papel => papel.ticket);
        this.listaDados = this.listaPapeis.map(papel => papel.valorAtual);
        this.listaDadosCor = this.listaPapeis.map(papel => papel.papelCorDeReferencia);    
       
      }, error: error => {

      }
    });
 
  }

  public inserirAcao(): void {

    const dialogRef = this.dialog.open(InserirAcaoComponent, {
      width: '1000px',
      height: "500px",
      data: { tipoPapel: "acao" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


}
