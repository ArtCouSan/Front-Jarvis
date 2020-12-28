import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-acao',
  templateUrl: './add-acao.component.html',
  styleUrls: ['./add-acao.component.scss']
})
export class AddAcaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddAcaoComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
