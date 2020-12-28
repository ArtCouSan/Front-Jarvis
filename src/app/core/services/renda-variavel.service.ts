
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PapelVariavelModel } from '../model/papel-variavel.model';

@Injectable({
    providedIn: 'root'
})
export class RendaVariavelService {

    constructor(private httpClient: HttpClient) { }

    listarPapeisRendaVariavel(): Observable<PapelVariavelModel[]> {

        return of([
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
              papelCorDeReferencia: '#ab5133'
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
              papelCorDeReferencia: '#648a1e'
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
              papelCorDeReferencia: '#3d3fbf'
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
              papelCorDeReferencia: '#1c9e4e'
            }
          ]);

    }

}