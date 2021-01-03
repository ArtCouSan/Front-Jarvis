
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FixaAddOrRemovePapelDto } from '../dto/fixa-add-remove.papel.dto';
import { FixaAlterarPapelDTO } from '../dto/fixa-alterar.papel.dto';
import { FixaCadastrarPapelDTO } from '../dto/fixa-cadastrar.papel.dto';
import { FixaDeletarPapelDTO } from '../dto/fixa-deletar.papel.dto';
import { ConsolidadoRendaFixaModel } from '../model/consolidado-renda-fixa.model';
import { ConsolidadoRendasModel } from '../model/consolidado-rendas.model';
import { ConsolidadoSelicModel } from '../model/consolidado-selic.model';
import { PapelSelicModel } from '../model/papel-selic.model';

@Injectable({
  providedIn: 'root'
})
export class RendaGeralService {

  constructor(private httpClient: HttpClient) { }

  pegarConsolidadoRenda(): Observable<ConsolidadoRendasModel> {
    return of({
      patrimonioTotal: 1000,
      renda: [
        {
          patrimonio: 500,
          tipoRenda: "teste 1",
          corReferencia: "#ab5133"
        },
        {
          patrimonio: 500,
          tipoRenda: "teste 2",
          corReferencia: "#1c9e4e"
        }
      ]
    })
  }

}
