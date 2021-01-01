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

    this.papel = {
      id: this.data.papel.id,
      margemDeQtn: this.data.papel.margemDeQtn,
      margemDeQtnDesejado: this.data.papel.margemDeQtnDesejado,
      nome: this.data.papel.nome,
      papelCorDeReferencia: this.data.papel.papelCorDeReferencia,
      porcentagemLucro: this.data.papel.porcentagemLucro,
      qntPapeis: this.data.papel.qntPapeis,
      ticket: this.data.papel.ticket,
      totalDoPapel: this.data.papel.totalDoPapel,
      valorAtual: this.data.papel.valorAtual,
      valorJusto: this.data.papel.valorJusto,
      variacaoDia: this.data.papel.variacaoDia
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public alterarAcao(): void {

    this.papel = {
      ...this.papel,
      margemDeQtn: this.fb.control['margemDeQtn'].value,
      margemDeQtnDesejado: this.fb.control['margemDeQtnDesejado'].value,
      nome: this.fb.control['nome'].value,
      papelCorDeReferencia: this.fb.control['papelCorDeReferencia'].value,
      porcentagemLucro: this.fb.control['porcentagemLucro'].value,
      qntPapeis: this.fb.control['qntPapeis'].value,
      ticket: this.fb.control['ticket'].value,
      totalDoPapel: this.fb.control['totalDoPapel'].value,
      valorAtual: this.fb.control['valorAtual'].value,
      valorJusto: this.fb.control['valorJusto'].value,
      variacaoDia: this.fb.control['variacaoDia'].value
    }

    this.rendaVariavelService.alterarPapel(this.papel).subscribe({
      next: result => {

      }, error: error => {
        
      }
    })

  }

}
