
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConsolidadoRendasModel } from '../model/consolidado-rendas.model';

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
