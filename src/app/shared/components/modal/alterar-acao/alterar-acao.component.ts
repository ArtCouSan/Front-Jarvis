import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
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
    ticket: new FormControl(this.data.papel.ticket),
    nome: new FormControl(this.data.papel.nome),
    valorAtual: new FormControl(this.data.papel.valorAtual),
    variacaoDia: new FormControl(this.data.papel.variacaoDia),
    valorJusto: new FormControl(this.data.papel.valorJusto),
    qntPapeis: new FormControl(this.data.papel.qntPapeis),
    porcentagemLucro: new FormControl(this.data.papel.porcentagemLucro),
    margemDeQtn: new FormControl(this.data.papel.margemDeQtn),
    margemDeQtnDesejado: new FormControl(this.data.papel.margemDeQtnDesejado),
    totalDoPapel: new FormControl(this.data.papel.totalDoPapel),
    papelCorDeReferencia: new FormControl(this.data.papel.papelCorDeReferencia)
  });

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
