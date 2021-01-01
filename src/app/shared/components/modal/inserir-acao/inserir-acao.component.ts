import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-inserir-acao',
  templateUrl: './inserir-acao.component.html',
  styleUrls: ['./inserir-acao.component.scss']
})
export class InserirAcaoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InserirAcaoComponent>,
    public fb: FormBuilder) { }

  form = this.fb.group({
    ticket: new FormControl("", [
      Validators.required
    ]),
    nome: new FormControl("", [
      Validators.required
    ]),
    valorAtual: new FormControl(0, [
      Validators.required
    ]),
    variacaoDia: new FormControl(0, [
      Validators.required
    ]),
    valorJusto: new FormControl(0, [
      Validators.required
    ]),
    qntPapeis: new FormControl(0, [
      Validators.required
    ]),
    porcentagemLucro: new FormControl(0, [
      Validators.required
    ]),
    margemDeQtn: new FormControl(0, [
      Validators.required
    ]),
    margemDeQtnDesejado: new FormControl(0, [
      Validators.required
    ]),
    totalDoPapel: new FormControl(0, [
      Validators.required
    ]),
    papelCorDeReferencia: new FormControl("", [
      Validators.required
    ]),
  });

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
