import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixaAddOrRemovePapelDto } from 'src/app/core/dto/fixa-add-remove.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-remover-fixa',
  templateUrl: './remover-fixa.component.html',
  styleUrls: ['./remover-fixa.component.scss']
})
export class RemoverFixaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<RemoverFixaComponent>,
    public fb: FormBuilder,
    private readonly rendaVariavelService: RendaVariavelService) { }

  public papel: FixaAddOrRemovePapelDto;

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

  public vender(): void {
    this.papel = {
      ...this.papel,
      data: this.fb.control['data'].value,
      qtn: this.fb.control['qtn'].value,
      valor: this.fb.control['valor'].value
    }

    this.rendaVariavelService.addOuRemoverPapel(this.papel).subscribe({
      next: result => {

      }, error: error => {

      }
    });

  }

}
