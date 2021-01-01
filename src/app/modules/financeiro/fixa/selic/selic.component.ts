import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConsolidadoSelicModel } from 'src/app/core/model/consolidado-selic.model';
import { PapelSelicModel } from 'src/app/core/model/papel-selic.model';
import { RendaFixaService } from 'src/app/core/services/renda-fixa.service';
import { InserirFixaComponent } from 'src/app/shared/components/modal/fixa/inserir-fixa/inserir-fixa.component';

@Component({
  selector: 'app-selic',
  templateUrl: './selic.component.html',
  styleUrls: ['./selic.component.scss']
})
export class SelicComponent implements OnInit {

  constructor(private readonly rendaFixaService: RendaFixaService,
    public dialog: MatDialog) { }

  public consolidadoTitulos: ConsolidadoSelicModel;

  public listaPapeis: Array<PapelSelicModel>;
  public listaDadosLegenda: Array<string>;
  public listaDados: Array<any>;
  public listaDadosCor: Array<string>;

  ngOnInit() {

    // Listar papeis
    this.rendaFixaService.pegarConsolidadoSelic().subscribe({
      next: result => {

        this.consolidadoTitulos = result as ConsolidadoSelicModel;

        this.listaPapeis = this.consolidadoTitulos.papeis;

        this.listaDadosLegenda = this.listaPapeis.map(papel => papel.ticket);
        this.listaDados = this.listaPapeis.map(papel => papel.valorAtual);
        this.listaDadosCor = this.listaPapeis.map(papel => papel.papelCorDeReferencia);    
       
      }, error: error => {

      }
    });
 
  }

  public inserirTitulo(): void {

    const dialogRef = this.dialog.open(InserirFixaComponent, {
      width: '1000px',
      height: "500px",
      data: { tipoPapel: "acao" }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  
}
