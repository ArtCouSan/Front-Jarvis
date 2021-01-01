import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';

@Component({
  selector: 'app-add-acao',
  templateUrl: './add-acao.component.html',
  styleUrls: ['./add-acao.component.scss']
})
export class AddAcaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<AddAcaoComponent>,
    public fb: FormBuilder) { }

  form = this.fb.group({
    qtn: new FormControl(0 , [
      Validators.required,
      Validators.min(1)
    ]),
    valor: new FormControl(0, [
      Validators.required,
      Validators.min(0)
    ]),
    data: new FormControl(Date.now(), [
      Validators.required
    ]),
  });
  
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public comprar(): void {
    console.log("Oi")
  }


}
