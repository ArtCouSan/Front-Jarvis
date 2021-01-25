
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { FixaAddOrRemovePapelDto } from '../dto/fixa-add-remove.papel.dto';
import { FixaAlterarPapelDTO } from '../dto/fixa-alterar.papel.dto';
import { FixaCadastrarPapelDTO } from '../dto/fixa-cadastrar.papel.dto';
import { FixaDeletarPapelDTO } from '../dto/fixa-deletar.papel.dto';
import { ConsolidadoRendaFixaModel } from '../model/consolidado-renda-fixa.model';
import { ConsolidadoSelicModel } from '../model/consolidado-selic.model';
import { PapelSelicModel } from '../model/papel-selic.model';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaService {

  constructor(private httpClient: HttpClient) { }

  pegarConsolidadoRendaFixa(): Observable<ConsolidadoRendaFixaModel> {
    return this.httpClient.get<ConsolidadoRendaFixaModel>(`${environment.rendaFixaApiURL}/consolidado`);
  }

  pegarConsolidadoSelic(): Observable<ConsolidadoSelicModel> {
    return this.httpClient.get<ConsolidadoSelicModel>(`${environment.rendaFixaApiURL}/consolidado/selic`);
  }

  addOuRemoverPapel(papel: FixaAddOrRemovePapelDto): Observable<PapelSelicModel> {
    return this.httpClient.post<PapelSelicModel>(`${environment.rendaFixaApiURL}/${papel.id}`, papel);
  }

  alterarPapel(papel: FixaAlterarPapelDTO): Observable<PapelSelicModel> {
    return this.httpClient.put<PapelSelicModel>(`${environment.rendaFixaApiURL}/${papel.id}`, papel);
  }

  deletarPapel(deletar: FixaDeletarPapelDTO): Observable<PapelSelicModel>{
    return this.httpClient.post<PapelSelicModel>(`${environment.rendaFixaApiURL}/deletar/${deletar.id}`, deletar);
  }

  cadastrarPapel(papel: FixaCadastrarPapelDTO): Observable<PapelSelicModel> {
    return this.httpClient.post<PapelSelicModel>(`${environment.rendaFixaApiURL}`, papel);
  }

}
