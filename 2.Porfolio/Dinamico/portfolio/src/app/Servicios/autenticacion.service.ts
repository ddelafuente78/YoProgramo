import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Access-Control-Request-Headers':'Content-Type, Authorization',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Request-Methods': 'OPTIONS,POST,GET'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  //private apiURL = 'http://localhost:8080/api/v1/auth/login';
  private apiURL = 'https://portfoliodelafuente.herokuapp.com/api/v1/auth/login';

  currentsubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    this.currentsubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentuser') || '{}'))
   }

   login(credenciales: any): Observable<any>{
    return this.http.post(this.apiURL, credenciales).pipe(
      map(rsta => {
        sessionStorage.setItem('currentuser',JSON.stringify(rsta));
        this.currentsubject.next(rsta);
        return rsta
      })
    ) 
   }

   get usuarioAutenticado(){
     return this.currentsubject.value;
   }

}
