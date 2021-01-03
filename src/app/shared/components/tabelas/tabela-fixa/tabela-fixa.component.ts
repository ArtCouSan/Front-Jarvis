import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PapelSelicModel } from 'src/app/core/model/papel-selic.model';
import { AddFixaComponent } from '../../modal/fixa/add-fixa/add-fixa.component';
import { AlterarFixaComponent } from '../../modal/fixa/alterar-fixa/alterar-fixa.component';
import { DeletarFixaComponent } from '../../modal/fixa/deletar-fixa/deletar-fixa.component';
import { RemoverFixaComponent } from '../../modal/fixa/remover-fixa/remover-fixa.component';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabela-fixa',
  templateUrl: './tabela-fixa.component.html',
  styleUrls: ['./tabela-fixa.component.scss']
})
export class TabelaFixaComponent implements OnInit {

  faPlus = faPlus;
  faMinus = faMinus;

  constructor(public dialog: MatDialog) { }

  @Input() dataSource: Array<PapelSelicModel>;

  panelOpenState = false;
  panelSecondOpenState = false;

  displayedColumns: string[] = ['papelCorDeReferencia', 'ticket', 'nome', 'valorAtual', 'variacaoDia', 'qntPapeis', 'totalDoPapel', 'acoes'];

  ngOnInit() {
  }

  public addTitulo(papel: PapelSelicModel): void {

    const dialogRef = this.dialog.open(AddFixaComponent, {
      width: '600px',
      height: "400px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public removerTitulo(papel: PapelSelicModel): void {

    const dialogRef = this.dialog.open(RemoverFixaComponent, {
      width: '600px',
      height: "400px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public editTitulo(papel: PapelSelicModel): void {

    const dialogRef = this.dialog.open(AlterarFixaComponent, {
      width: '800px',
      height: "500px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  public deleteTitulo(papel: PapelSelicModel): void {

    const dialogRef = this.dialog.open(DeletarFixaComponent, {
      width: '400px',
      height: "200px",
      data: { papel: papel }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

}
