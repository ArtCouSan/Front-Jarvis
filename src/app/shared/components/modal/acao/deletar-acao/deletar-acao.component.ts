import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { VariavelDeletarPapelDTO } from 'src/app/core/dto/variavel-deletar.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-deletar-acao',
  templateUrl: './deletar-acao.component.html',
  styleUrls: ['./deletar-acao.component.scss']
})
export class DeletarAcaoComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<DeletarAcaoComponent>,
    private readonly rendaVariavelService: RendaVariavelService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deletarAcao(): void {

    const isDeletar: VariavelDeletarPapelDTO = {
      isDeletar: true,
      id: this.data.papel.id
    }

    this.rendaVariavelService.deletarPapel(isDeletar).subscribe({
      next: result => {

      }, error: error => {
        
      }
    })

  }

}
