import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixaCadastrarPapelDTO } from 'src/app/core/dto/fixa-cadastrar.papel.dto';
import { RendaFixaService } from 'src/app/core/services/renda-fixa.service';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-inserir-fixa',
  templateUrl: './inserir-fixa.component.html',
  styleUrls: ['./inserir-fixa.component.scss']
})
export class InserirFixaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tipoPapel: string },
    public dialogRef: MatDialogRef<InserirFixaComponent>,
    public fb: FormBuilder,
    private readonly rendaFixaService: RendaFixaService) { }

  public papel: FixaCadastrarPapelDTO;

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
    qntPapeis: new FormControl(0, [
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
      nome: this.fb.control['nome'].value,
      papelCorDeReferencia: this.fb.control['papelCorDeReferencia'].value,
      qntPapeis: this.fb.control['qntPapeis'].value,
      ticket: this.fb.control['ticket'].value,
      totalDoPapel: this.fb.control['totalDoPapel'].value,
      valorAtual: this.fb.control['valorAtual'].value,
      variacaoDia: this.fb.control['variacaoDia'].value,
      tipoPapel: this.data.tipoPapel
    }

    this.rendaFixaService.cadastrarPapel(this.papel).subscribe({
      next: result => {

      }, error: error => {
        
      }
    })

  }


}
