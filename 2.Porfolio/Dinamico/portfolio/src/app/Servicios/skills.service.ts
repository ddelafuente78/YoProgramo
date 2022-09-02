import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ISkill } from './Interfaces/ISkills';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //private apiURL = 'http://localhost:8080/api/v1/skill';
  private apiURL = 'http://delafuenteportfolio.herokuapp.com/api/v1/skill';

  constructor(private http: HttpClient) { }

  getCategorias(issoft : boolean): Observable<ISkill[]>{
    const _url = this.apiURL + '/treacategorias/' + issoft;
    return this.http.get<ISkill[]>(_url);
  }

  getCategoriaXtipos(issoft: boolean, categoria: string): Observable<ISkill[]> {
    const _url = this.apiURL + '/treacategoriasxtipo/' + issoft + "/" + categoria;
    return this.http.get<ISkill[]>(_url);
  }

  createSkill(skill: ISkill): Observable<ISkill>{
    return this.http.post<ISkill>(this.apiURL + '/crear', skill, httpOptions);
  }

  editarSkill(skill: ISkill): Observable<ISkill>{
    const url: string = this.apiURL + '/editar/' + skill.id +
                        '?isSoftSkill=' + skill.isSoftSkill + 
                        '&categoria=' + skill.categoria + 
                        '&nombre=' + skill.nombre + 
                        '&porcentaje=' + skill.porcentaje;

    return this.http.put<ISkill>(url, skill, httpOptions);
  }

  deleteSkill(id: number): Observable<ISkill>{
    const url: string = this.apiURL + '/borrar/' + id;
    return this.http.delete<ISkill>(url);
  }

}
