import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FixaAlterarPapelDTO } from 'src/app/core/dto/fixa-alterar.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaFixaService } from 'src/app/core/services/renda-fixa.service';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-alterar-fixa',
  templateUrl: './alterar-fixa.component.html',
  styleUrls: ['./alterar-fixa.component.scss']
})
export class AlterarFixaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<AlterarFixaComponent>,
    public fb: FormBuilder,
    private readonly rendaFixaService: RendaFixaService) { }

  public papel: FixaAlterarPapelDTO;

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
    qntPapeis: new FormControl(this.data.papel.qntPapeis, [
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
      nome: this.data.papel.nome,
      papelCorDeReferencia: this.data.papel.papelCorDeReferencia,
      qntPapeis: this.data.papel.qntPapeis,
      ticket: this.data.papel.ticket,
      totalDoPapel: this.data.papel.totalDoPapel,
      valorAtual: this.data.papel.valorAtual
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public alterarAcao(): void {

    this.papel = {
      ...this.papel,
      nome: this.form.controls['nome'].value,
      papelCorDeReferencia: this.form.controls['papelCorDeReferencia'].value,
      qntPapeis: this.form.controls['qntPapeis'].value,
      ticket: this.form.controls['ticket'].value,
      totalDoPapel: this.form.controls['totalDoPapel'].value,
      valorAtual: this.form.controls['valorAtual'].value,
    }

    this.rendaFixaService.alterarPapel(this.papel).subscribe({
      next: result => {

        this.dialogRef.close({response: true, msg: "Sucesso"});

      }, error: error => {

        console.log(error);
        
      }
    })

  }

}
