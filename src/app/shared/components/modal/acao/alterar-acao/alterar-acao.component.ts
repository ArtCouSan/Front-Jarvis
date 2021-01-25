import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariavelAlterarPapelDTO } from 'src/app/core/dto/variavel-alterar.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-alterar-acao',
  templateUrl: './alterar-acao.component.html',
  styleUrls: ['./alterar-acao.component.scss']
})
export class AlterarAcaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<AlterarAcaoComponent>,
    public fb: FormBuilder,
    private readonly rendaVariavelService: RendaVariavelService) { }

  public papel: VariavelAlterarPapelDTO;

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
    valorJusto: new FormControl(this.data.papel.valorJusto, [
      Validators.required
    ]),
    qntPapeis: new FormControl(this.data.papel.qntPapeis, [
      Validators.required
    ]),
    margemDeQtnDesejado: new FormControl(this.data.papel.margemDeQtnDesejado, [
      Validators.required
    ]),
    papelCorDeReferencia: new FormControl(this.data.papel.papelCorDeReferencia, [
      Validators.required
    ]),
  });

  ngOnInit() {

    this.papel = {
      id: this.data.papel.id,
      margemDeQtnDesejado: this.data.papel.margemDeQtnDesejado,
      nome: this.data.papel.nome,
      papelCorDeReferencia: this.data.papel.papelCorDeReferencia,
      porcentagemLucro: this.data.papel.porcentagemLucro,
      qntPapeis: this.data.papel.qntPapeis,
      ticket: this.data.papel.ticket,
      valorAtual: this.data.papel.valorAtual,
      valorJusto: this.data.papel.valorJusto
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public alterarAcao(): void {

    this.papel = {
      ...this.papel,
      margemDeQtnDesejado: this.form.controls['margemDeQtnDesejado'].value,
      nome: this.form.controls['nome'].value,
      papelCorDeReferencia: this.form.controls['papelCorDeReferencia'].value,
      qntPapeis: this.form.controls['qntPapeis'].value,
      ticket: this.form.controls['ticket'].value,
      valorAtual: this.form.controls['valorAtual'].value,
      valorJusto: this.form.controls['valorJusto'].value
    }

    this.rendaVariavelService.alterarPapel(this.papel).subscribe({
      next: result => {

        this.dialogRef.close({response: true, msg: "Sucesso"});

      }, error: error => {

        console.log(error);

      }
    })

  }

}
