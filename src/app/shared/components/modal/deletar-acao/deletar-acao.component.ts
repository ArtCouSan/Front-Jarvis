import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-deletar-acao',
  templateUrl: './deletar-acao.component.html',
  styleUrls: ['./deletar-acao.component.scss']
})
export class DeletarAcaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeletarAcaoComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
