
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { VariavelAddOrRemovePapelDto } from '../dto/variavel-add-remove.papel.dto';
import { VariavelAlterarPapelDTO } from '../dto/variavel-alterar.papel.dto';
import { VariavelCadastrarPapelDTO } from '../dto/variavel-cadastrar.papel.dto';
import { VariavelDeletarPapelDTO } from '../dto/variavel-deletar.papel.dto';
import { ConsolidadoAcoesModel } from '../model/consolidado-acoes.model';
import { ConsolidadoFiisModel } from '../model/consolidado-fiis.model';
import { ConsolidadoRendaVariavelModel } from '../model/consolidado-renda-variavel.model';
import { GraficoQuantidadePapelModel } from '../model/grafico-quantidade-papel.model';
import { GraficoSetorModel } from '../model/grafico-setor.model';
import { GraficosFiisModel } from '../model/graficos-fiis.model';
import { PapelVariavelModel } from '../model/papel-variavel.model';

@Injectable({
  providedIn: 'root'
})
export class RendaVariavelService {

  constructor(private httpClient: HttpClient) { }

  pegarConsolidadoRendaVariavel(): Observable<ConsolidadoRendaVariavelModel> {
    return this.httpClient.get<ConsolidadoRendaVariavelModel>(`${environment.rendaVariavelApiURL}/consolidado`);
  }

  pegarConsolidadoAcoes(): Observable<ConsolidadoAcoesModel> {
    return this.httpClient.get<ConsolidadoAcoesModel>(`${environment.rendaVariavelApiURL}/consolidado/acoes`);
  }

  pegarConsolidadoFiis(): Observable<ConsolidadoFiisModel> {
    return this.httpClient.get<ConsolidadoFiisModel>(`${environment.rendaVariavelApiURL}/consolidado/fiis`);
  }

  addOuRemoverPapel(papel: VariavelAddOrRemovePapelDto): Observable<PapelVariavelModel> {
    return this.httpClient.post<PapelVariavelModel>(`${environment.rendaVariavelApiURL}/${papel.id}`, papel);
  }

  alterarPapel(papel: VariavelAlterarPapelDTO): Observable<PapelVariavelModel> {
    return this.httpClient.put<PapelVariavelModel>(`${environment.rendaVariavelApiURL}/${papel.id}`, papel);
  }

  deletarPapel(deletar: VariavelDeletarPapelDTO): Observable<any> {
    return this.httpClient.post<PapelVariavelModel>(`${environment.rendaVariavelApiURL}/deletar/${deletar.id}`, deletar);
  }

  cadastrarPapel(papel: VariavelCadastrarPapelDTO): Observable<PapelVariavelModel> {
    return this.httpClient.post<PapelVariavelModel>(`${environment.rendaVariavelApiURL}`, papel);
  }

}
