import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VariavelCadastrarPapelDTO } from 'src/app/core/dto/variavel-cadastrar.papel.dto';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-inserir-acao',
  templateUrl: './inserir-acao.component.html',
  styleUrls: ['./inserir-acao.component.scss']
})
export class InserirAcaoComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tipoPapel: string },
    public dialogRef: MatDialogRef<InserirAcaoComponent>,
    public fb: FormBuilder,
    private readonly rendaVariavelService: RendaVariavelService) { }

  @Output() cadastroEvento = new EventEmitter();

  public papel: VariavelCadastrarPapelDTO;

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
    valorJusto: new FormControl(0, [
      Validators.required
    ]),
    qntPapeis: new FormControl(0, [
      Validators.required
    ]),
    margemDeQtnDesejado: new FormControl(0, [
      Validators.required
    ]),
    papelCorDeReferencia: new FormControl("", [
      Validators.required
    ]),
    dataCompra: new FormControl("", [
      Validators.required
    ]),
    setor: new FormControl("", [
      Validators.required
    ]),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  public cadastrarAcao(): void {

    this.papel = {
      margemDeQtnDesejado: this.form.controls['margemDeQtnDesejado'].value,
      nome: this.form.controls['nome'].value,
      papelCorDeReferencia: this.form.controls['papelCorDeReferencia'].value,
      qntPapeis: this.form.controls['qntPapeis'].value,
      ticket: this.form.controls['ticket'].value,
      valorAtual: this.form.controls['valorAtual'].value,
      valorJusto: this.form.controls['valorJusto'].value,
      dataCompra: this.form.controls['dataCompra'].value,
      setor: this.form.controls['setor'].value,
      tipoPapel: this.data.tipoPapel,
    }

    this.rendaVariavelService.cadastrarPapel(this.papel).subscribe({
      next: result => {

        this.dialogRef.close({response: true, msg: "Sucesso"});

      }, error: error => {

        console.log(error);

      }
    })

  }


}
