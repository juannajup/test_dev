import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_API } from 'src/app/app.api';
import { Veiculo } from 'src/app/shared/models/veiculo';

@Injectable()

export class VeiculosService {
  /*
  veiculo() {
    throw new Error('Method not implemented.');
  }
  */

  constructor(private http: HttpClient) {}

  veiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${APP_API}/veiculos`);
  }

  veiculoPorId(id: string): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${APP_API}/veiculos/${id}`);
  }

  addVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(`${APP_API}/veiculos`, veiculo);
  }


  deletar(id: string) {
    return this.http.delete<Veiculo>(`${APP_API}/veiculos/${id}`);
  }
}
