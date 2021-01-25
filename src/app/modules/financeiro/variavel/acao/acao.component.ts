import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsolidadoAcoesModel } from 'src/app/core/model/consolidado-acoes.model';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';
import { InserirAcaoComponent } from 'src/app/shared/components/modal/acao/inserir-acao/inserir-acao.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss']
})
export class AcaoComponent implements OnInit {

  constructor(private readonly rendaVariavelService: RendaVariavelService,
    public dialog: MatDialog) { }

  faPlus = faPlus;

  public consolidadoAcoes: ConsolidadoAcoesModel = {
    grafico: {
      graficoQtnPapel: [],
      graficoSetor: []
    },
    papeis: [],
    patrimonio: [{
      value: 0
    }]
  };

  public listaPapeis: Array<PapelVariavelModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaVariavelService.pegarConsolidadoAcoes().subscribe({
      next: result => {

        if(result.papeis.length > 0) {

          this.consolidadoAcoes = result as ConsolidadoAcoesModel;

          this.listaPapeis = this.consolidadoAcoes.papeis;
  
          this.listaDadosLegenda = this.listaPapeis.map(papel => papel.ticket);
          this.listaDados = this.listaPapeis.map(papel => papel.totalDoPapel);
          this.listaDadosCor = this.listaPapeis.map(papel => papel.papelCorDeReferencia);

        } else {

          this.listaPapeis = [];
          this.listaDadosLegenda = [];
          this.listaDados = [];
          this.listaDadosCor = [];

        }
        
      }, error: error => {

        console.log(error);

      }
    });

  }

  public inserirAcao(): void {

    const dialogRef = this.dialog.open(InserirAcaoComponent, {
      width: '1000px',
      height: "500px",
      data: { tipoPapel: "ACOES" }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result) {

        window.location.reload();

      }

    });

  }


}
