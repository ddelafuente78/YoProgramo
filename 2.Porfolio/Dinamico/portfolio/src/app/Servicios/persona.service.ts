import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { IPersona } from './IPersona';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  private apiURL = 'http://localhost:8080/persona'

  constructor(private http: HttpClient) {} 
    
    getPersonas(): Observable<IPersona[]>{
      console.log(this.http.get<IPersona[]>(this.apiURL + '/traer'));
      return this.http.get<IPersona[]>(this.apiURL + '/traer');
    }

    deletePersona(persona: IPersona): Observable<IPersona>{
      const url: string = this.apiURL + '/borrar/' + persona.id;
      return this.http.delete<IPersona>(url);
    }

    editarPersona(persona: IPersona): Observable<IPersona>{
      const url: string = this.apiURL + '/editar/' + persona.id;
      return this.http.put<IPersona>(url, persona, httpOptions);
    }

    createPersona(persona: IPersona): Observable<IPersona>{
      return this.http.post<IPersona>(this.apiURL, persona, httpOptions);
    }

  }