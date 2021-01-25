import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VariavelAddOrRemovePapelDto } from 'src/app/core/dto/variavel-add-remove.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-add-acao',
  templateUrl: './add-acao.component.html',
  styleUrls: ['./add-acao.component.scss']
})
export class AddAcaoComponent implements OnInit {

  public papel: VariavelAddOrRemovePapelDto;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<AddAcaoComponent>,
    public fb: FormBuilder,
    private readonly rendaVariavelService: RendaVariavelService) { }

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
      isAdd: true
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public comprar(): void {
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
