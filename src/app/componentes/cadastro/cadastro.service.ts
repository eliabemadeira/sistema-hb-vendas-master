import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API = 'http://localhost:3000/cadastros'

  constructor(private http: HttpClient) { }

  listar(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(this.API)
  }

  criar(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.API, cadastro)
  }

  ediar(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${this.API}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  excluir(id: number): Observable<Cadastro> {
    const url = `${this.API}/${id}`
    return this.http.delete<Cadastro>(url)
  }

 buscarPorId(id: number): Observable<Cadastro> {
    const url = `${this.API}/${id}`
    return this.http.get<Cadastro>(url)
  }
}
