import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FixaDeletarPapelDTO } from 'src/app/core/dto/fixa-deletar.papel.dto';
import { PapelVariavelModel } from 'src/app/core/model/papel-variavel.model';
import { RendaVariavelService } from 'src/app/core/services/renda-variavel.service';

@Component({
  selector: 'app-deletar-fixa',
  templateUrl: './deletar-fixa.component.html',
  styleUrls: ['./deletar-fixa.component.scss']
})
export class DeletarFixaComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { papel: PapelVariavelModel },
    public dialogRef: MatDialogRef<DeletarFixaComponent>,
    private readonly rendaVariavelService: RendaVariavelService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public deletarAcao(): void {

    const isDeletar: FixaDeletarPapelDTO = {
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
