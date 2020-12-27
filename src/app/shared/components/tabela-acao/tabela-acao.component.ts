import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { AddAcaoComponent } from '../modal/add-acao/add-acao.component';
import { AlterarAcaoComponent } from '../modal/alterar-acao/alterar-acao.component';
import { DeletarAcaoComponent } from '../modal/deletar-acao/deletar-acao.component';
import { RemoverAcaoComponent } from '../modal/remover-acao/remover-acao.component';

@Component({
  selector: 'app-tabela-acao',
  templateUrl: './tabela-acao.component.html',
  styleUrls: ['./tabela-acao.component.scss']
})
export class TabelaAcaoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() dataSource: Array<PapelVariavelModel>;

  panelOpenState = false;

  displayedColumns: string[] = ['ticket', 'nome', 'valorAtual', 'variacaoDia', 'valorJusto', 'qntPapeis', 'porcentagemLucro', 'margemDeQtn', 'margemDeQtnDesejado', 'totalDoPapel', 'acoes'];

  ngOnInit() {
  }

  public addAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(AddAcaoComponent, {
      width: '500px',
      height: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public removerAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(RemoverAcaoComponent, {
      width: '500px',
      height: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public editAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(AlterarAcaoComponent, {
      width: '500px',
      height: "500px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public deleteAcao(papel: PapelVariavelModel): void {

    const dialogRef = this.dialog.open(DeletarAcaoComponent, {
      width: '400px',
      height: "200px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
