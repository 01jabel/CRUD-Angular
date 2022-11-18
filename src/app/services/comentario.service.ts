import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private myAppurl = 'https://localhost:7131/';
  private myApiurl = 'api/comentario/'

  constructor(private http: HttpClient) { }
    getListComentarios(): Observable<any> {
      return this.http.get(this.myAppurl + this.myApiurl)
    }

    deleteComentario(id: number): Observable<any> {
      return this.http.delete(this.myAppurl + this.myApiurl + id)

    }

    getComentario(id: number): Observable<any> {
      return this.http.get(this.myAppurl + this.myApiurl + id);
    }
 
    saveComentario(comentario: Comentario): Observable<any> {
      return this.http.post(this.myAppurl + this.myApiurl, comentario);
    }
    updateComentario(id: number, comentario: Comentario): Observable<any> {
      return this.http.put(this.myAppurl + this.myApiurl + id, comentario);
    }
}
