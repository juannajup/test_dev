import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_API } from 'src/app/app.api';
import { Proposta } from 'src/app/shared/models/proposta';

@Injectable()
export class PropostasService {

  constructor(private http: HttpClient) {}

  propostas(): Observable<Proposta[]> {
    return this.http.get<Proposta[]>(`${APP_API}/propostas`);
  }

  propostaPorId(id: string): Observable<Proposta> {
    return this.http.get<Proposta>(`${APP_API}/propostas/${id}`);
  }

  addProposta(proposta: Proposta): Observable<Proposta> {
    return this.http.post<Proposta>(`${APP_API}/propostas`, proposta);
  }

  atualizar(proposta: Proposta): Observable<Proposta> {
    return this.http.put<Proposta>(`${APP_API}/propostas`, proposta);
  }

  deletar(id: string) {
    return this.http.delete<Proposta>(`${APP_API}/propostas/${id}`);
  }
}
