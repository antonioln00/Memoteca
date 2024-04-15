import { Pensamento } from './../components/pensamentos/pensamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePensamentoService {

  private readonly _api = "http://localhost:5163/pensamento";
  constructor(private _http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this._http.get<Pensamento[]>(this._api)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this._http.post<Pensamento>(this._api, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this._api}/${pensamento.id}`;
    return this._http.put<Pensamento>(url, pensamento);
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this._api}/${id}`;
    return this._http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this._api}/${id}`;
    return this._http.get<Pensamento>(url);
  }
}
