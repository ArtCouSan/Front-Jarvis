import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsolidadoSelicModel } from 'src/app/core/model/consolidado-selic.model';
import { PapelSelicModel } from 'src/app/core/model/papel-selic.model';
import { RendaFixaService } from 'src/app/core/services/renda-fixa.service';
import { InserirFixaComponent } from 'src/app/shared/components/modal/fixa/inserir-fixa/inserir-fixa.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.scss']
})
export class SelicComponent implements OnInit {

  faPlus = faPlus;

  constructor(private readonly rendaFixaService: RendaFixaService,
    public dialog: MatDialog) { }

  public consolidadoTitulos: ConsolidadoSelicModel = {
    grafico: [],
    papeis: [],
    patrimonio: [{
      value: 0
    }]
  };

  public listaPapeis: Array<PapelSelicModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaFixaService.pegarConsolidadoSelic().subscribe({
      next: result => {

        if(result.papeis.length > 0) {

          this.consolidadoTitulos = result as ConsolidadoSelicModel;

          this.listaPapeis = this.consolidadoTitulos.papeis;
  
          this.listaDadosLegenda = this.listaPapeis.map(papel => papel.ticket);
          this.listaDados = this.listaPapeis.map(papel => papel.valorAtual);
          this.listaDadosCor = this.listaPapeis.map(papel => papel.papelCorDeReferencia);    
         
        }else {

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

  public inserirTitulo(): void {

    const dialogRef = this.dialog.open(InserirFixaComponent, {
      width: '1000px',
      height: "500px",
      data: { tipoPapel: "SELIC" }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result) {

        window.location.reload();

      }

    });

  }
  
}
