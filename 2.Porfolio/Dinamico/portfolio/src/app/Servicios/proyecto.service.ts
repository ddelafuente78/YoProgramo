import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IProyecto } from './Interfaces/IProyecto';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin': '*',
    'Vary': 'Origin'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //private apiURL = 'http://localhost:8080/api/v1/proyecto';
  private apiURL = 'http://portfoliodelafuente.herokuapp.com/api/v1/proyecto';

  constructor(private http: HttpClient) { }

  getProyectos(): Observable<IProyecto[]>{
    const _url = this.apiURL + '/traer'
    return this.http.get<IProyecto[]>(_url);
  }

  deleteProyecto(id: number): Observable<IProyecto>{
    const url: string = this.apiURL + '/borrar/' + id;
    return this.http.delete<IProyecto>(url);
  }

  editarProyecto(proyecto: IProyecto): Observable<IProyecto>{
    const url: string = this.apiURL + '/editar/' + proyecto.id +
                        '?aniodesde=' + proyecto.aniodesde + 
                        '&aniohasta=' + proyecto.aniohasta + 
                        '&nombre=' + proyecto.nombre + 
                        '&descripcion=' + proyecto.descripcion;

    return this.http.put<IProyecto>(url, proyecto, httpOptions);
  }

  createProyecto(proyecto: IProyecto): Observable<IProyecto>{
    return this.http.post<IProyecto>(this.apiURL + '/crear', proyecto, httpOptions);
  }

  encontrarProyecto(id: number): Observable<IProyecto>{
    const _url = this.apiURL + '/encontrar/' + id;
    return this.http.get<IProyecto>(_url);
  }
}
