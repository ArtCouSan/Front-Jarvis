import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-remover-acao',
  templateUrl: './remover-acao.component.html',
  styleUrls: ['./remover-acao.component.scss']
})
export class RemoverAcaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoverAcaoComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
