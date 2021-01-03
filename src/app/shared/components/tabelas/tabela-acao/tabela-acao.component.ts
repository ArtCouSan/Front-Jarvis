import { Component, Input, OnInit } from '@angular/core';
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
export class TabelaAcaoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() dataSource: Array<PapelVariavelModel>;

  panelOpenState = false;
  panelSecondOpenState = false;

  faPlus = faPlus;
  faMinus = faMinus;
  
  displayedColumns: string[] = ['papelCorDeReferencia', 'ticket', 'nome', 'valorAtual', 'variacaoDia', 'valorJusto', 'qntPapeis', 'porcentagemLucro', 'margemDeQtn', 'margemDeQtnDesejado', 'totalDoPapel', 'acoes'];

  ngOnInit() {
  }

  public addAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(AddAcaoComponent, {
      width: '600px',
      height: "400px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public removerAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(RemoverAcaoComponent, {
      width: '600px',
      height: "400px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public editAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(AlterarAcaoComponent, {
      width: '800px',
      height: "500px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public deleteAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(DeletarAcaoComponent, {
      width: '400px',
      height: "200px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
