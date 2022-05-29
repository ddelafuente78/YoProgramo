import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IExperiencia } from './Interfaces/IExperiencia';
import { catchError, Observable, of, Subject, tap, throwError } from 'rxjs'

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
export class ExperienciaService {

  //private apiURL = 'http://localhost:8080/api/v1/experiencia'
  private apiURL = 'http://portfoliodelafuente.herokuapp.com/api/v1/experiencia'

  constructor(private http: HttpClient) { }

  private _refreshrequired=new Subject<void>();
  public refreshrequired$ = this._refreshrequired.asObservable();

  get Refreshrequired() {
    return this._refreshrequired;
  }  

    getExperiencias(): Observable<IExperiencia[]>{
      const _url = this.apiURL + '/traer'
      return this.http.get<IExperiencia[]>(_url);
    }

    deleteExperiencia(id: number): Observable<IExperiencia>{
      const url: string = this.apiURL + '/borrar/' + id;
      return this.http.delete<IExperiencia>(url);
    }

    editarExperiencia(experiencia: IExperiencia): Observable<IExperiencia>{
      const url: string = this.apiURL + '/editar/' + experiencia.id +
                          '?aniodesde=' + experiencia.aniodesde + 
                          '&aniohasta=' + experiencia.aniohasta + 
                          '&empresa=' + experiencia.empresa + 
                          '&detalle=' + experiencia.detalle;
      ;
      return this.http.put<IExperiencia>(url, experiencia, httpOptions);
    }

    createExperiencia(experiencia: IExperiencia): Observable<IExperiencia>{
      return this.http.post<IExperiencia>(this.apiURL + '/crear', experiencia).pipe(
        catchError(err => { console.log(err); return throwError(err);})
      );
    }

    encontrarExperiencia(id: number): Observable<IExperiencia>{
      const _url = this.apiURL + '/encontrar/' + id;
      return this.http.get<IExperiencia>(_url);
    }
  }