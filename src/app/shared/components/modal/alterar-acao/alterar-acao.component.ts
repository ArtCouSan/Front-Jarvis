import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';

@Component({
  selector: 'app-alterar-acao',
  templateUrl: './alterar-acao.component.html',
  styleUrls: ['./alterar-acao.component.scss']
})
export class AlterarAcaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<AlterarAcaoComponent>,
    public fb: FormBuilder) { }

  form = this.fb.group({
    ticket: new FormControl(this.data.papel.ticket, [
      Validators.required
    ]),
    nome: new FormControl(this.data.papel.nome, [
      Validators.required
    ]),
    valorAtual: new FormControl(this.data.papel.valorAtual, [
      Validators.required
    ]),
    variacaoDia: new FormControl(this.data.papel.variacaoDia, [
      Validators.required
    ]),
    valorJusto: new FormControl(this.data.papel.valorJusto, [
      Validators.required
    ]),
    qntPapeis: new FormControl(this.data.papel.qntPapeis, [
      Validators.required
    ]),
    porcentagemLucro: new FormControl(this.data.papel.porcentagemLucro, [
      Validators.required
    ]),
    margemDeQtn: new FormControl(this.data.papel.margemDeQtn, [
      Validators.required
    ]),
    margemDeQtnDesejado: new FormControl(this.data.papel.margemDeQtnDesejado, [
      Validators.required
    ]),
    totalDoPapel: new FormControl(this.data.papel.totalDoPapel, [
      Validators.required
    ]),
    papelCorDeReferencia: new FormControl(this.data.papel.papelCorDeReferencia, [
      Validators.required
    ]),
  });

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
