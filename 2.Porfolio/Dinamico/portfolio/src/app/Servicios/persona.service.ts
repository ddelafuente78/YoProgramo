import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IPersona } from './Interfaces/IPersona';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  //private apiURL = 'http://localhost:8080/api/v1/persona';
  private apiURL = 'http://portfoliodelafuente.herokuapp.com/api/v1/persona';

  constructor(private http: HttpClient) {  } 
    
    getPersonas(): Observable<IPersona[]>{
      const _url = this.apiURL + '/traer';
      return this.http.get<IPersona[]>(_url);
    }

    /*
    deletePersona(persona: IPersona): Observable<IPersona>{
      const url: string = this.apiURL + '/borrar/' + persona.id;
      return this.http.delete<IPersona>(url);
    }*/

    editarPersona(persona: IPersona): Observable<any>{
      const url: string = this.apiURL + '/editar/' + persona.id
      + "?bannerimg=" + persona.bannerimg + "&foto=" + persona.foto 
      + "&apellido=" + persona.apellido + "&nombre=" + persona.nombre
      + "&acercade=" + persona.acercade;
      return this.http.put<IPersona>(url, persona, httpOptions);
    }

    createPersona(persona: IPersona): Observable<any>{
      let ret = this.http.post(this.apiURL + '/crear', persona, httpOptions)
      return ret;
    }

  }