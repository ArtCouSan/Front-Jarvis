import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VariavelAddOrRemovePapelDto } from 'src/app/core/dto/variavel-add-remove.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-remover-acao',
  templateUrl: './remover-acao.component.html',
  styleUrls: ['./remover-acao.component.scss']
})
export class RemoverAcaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<RemoverAcaoComponent>,
    public fb: FormBuilder,
    private readonly rendaVariavelService: RendaVariavelService) { }

  public papel: VariavelAddOrRemovePapelDto;

  form = this.fb.group({
    qtn: new FormControl(0, [
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
    this.papel = {
      id: this.data.papel.id,
      data: new Date(),
      qtn: 0,
      valor: 0,
      isAdd: false
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public vender(): void {
    this.papel = {
      ...this.papel,
      data: this.form.controls['data'].value,
      qtn: this.form.controls['qtn'].value,
      valor: this.form.controls['valor'].value
    }

    this.rendaVariavelService.addOuRemoverPapel(this.papel).subscribe({
      next: result => {

        this.dialogRef.close({response: true, msg: "Sucesso"});

      }, error: error => {

        console.log(error);

      }
    });

  }

}
