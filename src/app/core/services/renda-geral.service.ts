
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { ConsolidadoRendasModel } from '../model/consolidado-rendas.model';

@Injectable({
  providedIn: 'root'
})
export class RendaGeralService {

  constructor(private httpClient: HttpClient) { }

  pegarConsolidadoRenda(): Observable<ConsolidadoRendasModel> {
    return this.httpClient.get<ConsolidadoRendasModel>(`${environment.rendaGeralApiURL}/consolidado`);
  }

}
