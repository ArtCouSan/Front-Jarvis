import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VariavelCadastrarPapelDTO } from 'src/app/core/dto/variavel-cadastrar.papel.dto';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-inserir-acao',
  templateUrl: './inserir-acao.component.html',
  styleUrls: ['./inserir-acao.component.scss']
})
export class InserirAcaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tipoPapel: string },
    public dialogRef: MatDialogRef<InserirAcaoComponent>,
    public fb: FormBuilder,
    private readonly rendaVariavelService: RendaVariavelService) { }

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

  public cadastrarAcao(): void {

    this.papel = {
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
      variacaoDia: this.fb.control['variacaoDia'].value,
      tipoPapel: this.data.tipoPapel
    }

    this.rendaVariavelService.cadastrarPapel(this.papel).subscribe({
      next: result => {

      }, error: error => {
        
      }
    })

  }


}
