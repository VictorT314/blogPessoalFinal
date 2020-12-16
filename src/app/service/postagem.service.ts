import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postagem } from '../model/Postagem';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens() {
    return this.http.get('https://blogpessoal-turma11-victor.herokuapp.com/postagens', this.token)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`https://blogpessoal-turma11-victor.herokuapp.com/postagens/${id}`, this.token)
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('https://blogpessoal-turma11-victor.herokuapp.com/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('https://blogpessoal-turma11-victor.herokuapp.com/postagens', postagem, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`https://blogpessoal-turma11-victor.herokuapp.com/postagens/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string) {
    return this.http.get(`https://blogpessoal-turma11-victor.herokuapp.com/postagens/titulo/${titulo}`, this.token)
  }


}
