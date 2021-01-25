import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { AddAcaoComponent } from '../../modal/acao/add-acao/add-acao.component';
import { AlterarAcaoComponent } from '../../modal/acao/alterar-acao/alterar-acao.component';
import { DeletarAcaoComponent } from '../../modal/acao/deletar-acao/deletar-acao.component';
import { RemoverAcaoComponent } from '../../modal/acao/remover-acao/remover-acao.component';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabela-acao',
  templateUrl: './tabela-acao.component.html',
  styleUrls: ['./tabela-acao.component.scss']
})
export class TabelaAcaoComponent implements OnChanges {

  constructor(public dialog: MatDialog) { }

  @Input() dataSource: Array<PapelVariavelModel>;

  panelOpenState = false;
  panelSecondOpenState = false;

  faPlus = faPlus;
  faMinus = faMinus;
  
  displayedColumns: string[] = ['papelCorDeReferencia', 'ticket', 'nome', 'valorAtual', 'variacaoDia', 'valorJusto', 'qntPapeis', 'porcentagemLucro', 'margemDeQtn', 'margemDeQtnDesejado', 'totalDoPapel', 'acoes'];

   
  ngOnChanges(changes: SimpleChanges): void {

    if(changes.dataSource.currentValue) {
      this.dataSource = changes.dataSource.currentValue;
    }
    
  }

  public addAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(AddAcaoComponent, {
      width: '600px',
      height: "400px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result) {

        window.location.reload();

      }

    });

  }

  public removerAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(RemoverAcaoComponent, {
      width: '600px',
      height: "400px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result) {

        window.location.reload();

      }

    });

  }

  public editAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(AlterarAcaoComponent, {
      width: '800px',
      height: "500px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
     
      if(result) {

        window.location.reload();

      }

    });

  }

  public deleteAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(DeletarAcaoComponent, {
      width: '400px',
      height: "200px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {

      if(result) {

        window.location.reload();

      }

    });

  }

}
