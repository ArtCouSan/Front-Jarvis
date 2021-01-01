
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsolidadoFiisModel } from '../model/consolidado-fiis.model';
import { GraficoQuantidadePapelModel } from '../model/grafico-quantidade-papel.model';
import { GraficoSetorModel } from '../model/grafico-setor.model';
import { GraficosFiisModel } from '../model/graficos-fiis.model';
import { PapelVariavelModel } from '../model/papel-variavel.model';

@Injectable({
  providedIn: 'root'
})
export class RendaVariavelService {

  constructor(private httpClient: HttpClient) { }

  pegarConsolidadoFiis(): Observable<ConsolidadoFiisModel> {

    const graficoSetor: Array<GraficoSetorModel> = [
      {
        setorCorDeReferencia: '#ab5133',
        setor: 'string 1',
        numeroSetores: 1
      },
      {
        setorCorDeReferencia: '#1c9e4e',
        setor: 'string 2',
        numeroSetores: 2
      },
      {
        setorCorDeReferencia: '#648a1e',
        setor: 'string 3',
        numeroSetores: 3
      },
      {
        setorCorDeReferencia: '#3d3fbf',
        setor: 'string 4',
        numeroSetores: 4
      }
    ];

    const graficoQtnPapel: Array<GraficoQuantidadePapelModel> = [
      {
        numeroQtnPapel: 2,
        ticketPapel: 'string 1',
        qtnPapelCorDeReferencia: "#3d3fbf"
      }
    ]

    const papeis: Array<PapelVariavelModel> = [
      {
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
        setor: 'Sem'
      },
      {
        ticket: "Teste 2",
        nome: "Teste 2",
        valorAtual: 2,
        variacaoDia: 1,
        valorJusto: 100,
        qntPapeis: 8,
        porcentagemLucro: 10,
        margemDeQtn: 5,
        margemDeQtnDesejado: 60,
        totalDoPapel: 80,
        papelCorDeReferencia: '#648a1e',
        setor: 'Sem'
      },
      {
        ticket: "Teste 3",
        nome: "Teste 3",
        valorAtual: 3,
        variacaoDia: 1,
        valorJusto: 100,
        qntPapeis: 8,
        porcentagemLucro: 10,
        margemDeQtn: 5,
        margemDeQtnDesejado: 60,
        totalDoPapel: 80,
        papelCorDeReferencia: '#3d3fbf',
        setor: 'Sem'
      },
      {
        ticket: "Teste 4",
        nome: "Teste 4",
        valorAtual: 4,
        variacaoDia: 1,
        valorJusto: 100,
        qntPapeis: 8,
        porcentagemLucro: 10,
        margemDeQtn: 5,
        margemDeQtnDesejado: 60,
        totalDoPapel: 80,
        papelCorDeReferencia: '#1c9e4e',
        setor: 'Sem'
      }
    ]

    const patrimonio = 10000000;

    return of(
      {
        grafico: {
          graficoQtnPapel: graficoQtnPapel,
          graficoSetor: graficoSetor
        },
        papeis: papeis,
        patrimonio: patrimonio
      })
  }

}
