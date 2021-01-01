import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsolidadoFiisModel } from 'src/app/core/model/consolidado-fiis.model';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';
import { InserirAcaoComponent } from 'src/app/shared/components/modal/acao/inserir-acao/inserir-acao.component';
@Component({
  selector: 'app-fiis',
  templateUrl: './fiis.component.html',
  styleUrls: ['./fiis.component.scss']
})
export class FiisComponent implements OnInit {

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

        this.consolidadoFiis = result as ConsolidadoFiisModel;

        this.listaPapeis = this.consolidadoFiis.papeis;

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
      data: { tipoPapel: "fii" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }


}
