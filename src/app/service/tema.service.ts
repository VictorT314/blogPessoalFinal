import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tema } from '../model/Tema';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTemas() {
    return this.http.get('https://blogpessoal-turma11-victor.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(`https://blogpessoal-turma11-victor.herokuapp.com/tema/${id}`, this.token)
  }

  postTema(tema: Tema) {
    return this.http.post('https://blogpessoal-turma11-victor.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema) {
    return this.http.put('https://blogpessoal-turma11-victor.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://blogpessoal-turma11-victor.herokuapp.com/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string) {
    return this.http.get(`https://blogpessoal-turma11-victor.herokuapp.com/tema/nome/${nome}`, this.token)
  }


}
