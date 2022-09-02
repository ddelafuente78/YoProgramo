import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IEducacion } from './Interfaces/IEducacion';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EducacionService {
  //private apiURL = 'http://localhost:8080/api/v1/educacion'
  private apiURL = 'https://delafuenteportfolio.herokuapp.com/api/v1/educacion'

  constructor(private http: HttpClient) { }

  getEducaciones(): Observable<IEducacion[]>{
    const _url = this.apiURL + '/traer'
    return this.http.get<IEducacion[]>(_url);
  }

  deleteEducacion(id: number): Observable<IEducacion>{
    const url: string = this.apiURL + '/borrar/' + id;
    return this.http.delete<IEducacion>(url);
  }

  editarEducacion(educacion: IEducacion): Observable<IEducacion>{
    const url: string = this.apiURL + '/editar/' + educacion.id +
                        '?aniodesde=' + educacion.aniodesde + 
                        '&aniohasta=' + educacion.aniohasta + 
                        '&institucion=' + educacion.institucion + 
                        '&detalle=' + educacion.detalle;

    return this.http.put<IEducacion>(url, educacion, httpOptions);
  }

  createEducacion(educacion: IEducacion): Observable<IEducacion>{
    return this.http.post<IEducacion>(this.apiURL + '/crear', educacion, httpOptions);
  }

  encontrarEducacion(id: number): Observable<IEducacion>{
    const _url = this.apiURL + '/encontrar/' + id;
    return this.http.get<IEducacion>(_url);
  }
}
