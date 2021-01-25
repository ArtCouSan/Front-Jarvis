import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixaAddOrRemovePapelDto } from 'src/app/core/dto/fixa-add-remove.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaFixaService } from 'src/app/core/services/renda-fixa.service';

@Component({
  selector: 'app-add-fixa',
  templateUrl: './add-fixa.component.html',
  styleUrls: ['./add-fixa.component.scss']
})
export class AddFixaComponent implements OnInit {

  public papel: FixaAddOrRemovePapelDto;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<AddFixaComponent>,
    public fb: FormBuilder,
    private readonly rendaFixaService: RendaFixaService) { }

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

    this.rendaFixaService.addOuRemoverPapel(this.papel).subscribe({
      next: result => {

        this.dialogRef.close({response: true, msg: "Sucesso"});

      }, error: error => {

        console.log(error);

      }
    });

  }

}
