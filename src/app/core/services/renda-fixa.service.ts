
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
        tipoPapel: 'fii',
        dataCompra: new Date
      },
      {
        ticket: "Teste 2",
        nome: "Teste 2",
        valorAtual: 2,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#648a1e',
        tipoPapel: 'fii',
        dataCompra: new Date
      },
      {
        ticket: "Teste 3",
        nome: "Teste 3",
        valorAtual: 3,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#3d3fbf',
        tipoPapel: 'fii',
        dataCompra: new Date
      },
      {
        ticket: "Teste 4",
        nome: "Teste 4",
        valorAtual: 4,
        variacaoDia: 1,
        qntPapeis: 8,
        totalDoPapel: 80,
        papelCorDeReferencia: '#1c9e4e',
        tipoPapel: 'fii',
        dataCompra: new Date
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
      tipoPapel: 'acao',
      dataCompra: new Date
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
      tipoPapel: 'acao',
      dataCompra: new Date
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
      tipoPapel: 'acao',
      dataCompra: new Date
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
      tipoPapel: 'acao',
      dataCompra: new Date
    })
  }

}
