import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Processos } from '../shared/models/processos';
import { ConfigPrams } from '../shared/models/config-prams';
import { ConfigParamsService } from './config-params.service';

const url = 'http://localhost:3000/processos/';

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  constructor(private http: HttpClient,
              private configService: ConfigParamsService) { }

  salvar(processos: Processos): Observable<Processos> {
    return this.http.post<Processos>(url, processos);
  }

  editar(processos: Processos): Observable<Processos> {
    return this.http.put<Processos>(url + processos.id, processos);
  }

  listar(config: ConfigPrams): Observable<Processos[]> {
    const configPrams = this.configService.configurarParametros(config);
    return this.http.get<Processos[]>(url, {params: configPrams});
  }

  visualizar(id: number): Observable<Processos> {
    return this.http.get<Processos>(url + id);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(url + id);
  }
}
