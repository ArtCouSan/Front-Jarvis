
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FixaAddOrRemovePapelDto } from '../dto/fixa-add-remove.papel.dto';
import { FixaAlterarPapelDTO } from '../dto/fixa-alterar.papel.dto';
import { FixaCadastrarPapelDTO } from '../dto/fixa-cadastrar.papel.dto';
import { FixaDeletarPapelDTO } from '../dto/fixa-deletar.papel.dto';
import { ConsolidadoSelicModel } from '../model/consolidado-selic.model';
import { PapelSelicModel } from '../model/papel-selic.model';

@Injectable({
  providedIn: 'root'
})
export class RendaFixaService {

  constructor(private httpClient: HttpClient) { }

  pegarConsolidadoSelic(): Observable<ConsolidadoSelicModel> {

    const papeis: Array<PapelSelicModel> = [
      {
        ticket: "Teste 1",
        nome: "Teste 1",
        valorAtual: 1,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#ab5133',
        tipoPapel: 'fii'
      },
      {
        ticket: "Teste 2",
        nome: "Teste 2",
        valorAtual: 2,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#648a1e',
        tipoPapel: 'fii'
      },
      {
        ticket: "Teste 3",
        nome: "Teste 3",
        valorAtual: 3,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#3d3fbf',
        tipoPapel: 'fii'
      },
      {
        ticket: "Teste 4",
        nome: "Teste 4",
        valorAtual: 4,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#1c9e4e',
        tipoPapel: 'fii'
      }
    ]

    const patrimonio = 10000000;

    return of(
      {
        grafico: {},
        papeis: papeis,
        patrimonio: patrimonio
      })
  }

  addOuRemoverPapel(papel: FixaAddOrRemovePapelDto): Observable<PapelSelicModel> {
    return of({
      ticket: "Teste 1",
      nome: "Teste 1",
      valorAtual: 1,
      variacaoDia: 1,
      valorJusto: 100,
      qntPapeis: 8,
      porcentagemLucro: 10,
      margemDeQtn: 5,
      margemDeQtnDesejado: 60,
      totalDoPapel: 80,
      papelCorDeReferencia: '#ab5133',
      setor: 'Sem',
      tipoPapel: 'acao'
    })
  }

  alterarPapel(papel: FixaAlterarPapelDTO): Observable<PapelSelicModel> {
    return of({
      ticket: "Teste 1",
      nome: "Teste 1",
      valorAtual: 1,
      variacaoDia: 1,
      valorJusto: 100,
      qntPapeis: 8,
      porcentagemLucro: 10,
      margemDeQtn: 5,
      margemDeQtnDesejado: 60,
      totalDoPapel: 80,
      papelCorDeReferencia: '#ab5133',
      setor: 'Sem',
      tipoPapel: 'acao'
    })
  }

  deletarPapel(deletar: FixaDeletarPapelDTO): Observable<PapelSelicModel>{
    return of({
      ticket: "Teste 1",
      nome: "Teste 1",
      valorAtual: 1,
      variacaoDia: 1,
      valorJusto: 100,
      qntPapeis: 8,
      porcentagemLucro: 10,
      margemDeQtn: 5,
      margemDeQtnDesejado: 60,
      totalDoPapel: 80,
      papelCorDeReferencia: '#ab5133',
      setor: 'Sem',
      tipoPapel: 'acao'
    })
  }

  cadastrarPapel(papel: FixaCadastrarPapelDTO): Observable<PapelSelicModel> {
    return of({
      ticket: "Teste 1",
      nome: "Teste 1",
      valorAtual: 1,
      variacaoDia: 1,
      valorJusto: 100,
      qntPapeis: 8,
      porcentagemLucro: 10,
      margemDeQtn: 5,
      margemDeQtnDesejado: 60,
      totalDoPapel: 80,
      papelCorDeReferencia: '#ab5133',
      setor: 'Sem',
      tipoPapel: 'acao'
    })
  }

}
