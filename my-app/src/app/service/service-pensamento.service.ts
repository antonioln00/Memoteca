import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from '../components/pensamentos/pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicePensamentoService {

  private readonly _api = "http://localhost:3000/pensamentos";
  constructor(private _http: HttpClient) { }

  listar(): Observable<Pensamento[]>{
    return this._http.get<Pensamento[]>(this._api)
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this._http.post<Pensamento>(this._api, pensamento)
  }
}
