import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private apiURL = 'http://localhost:8080/api/v1/auth/login'

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
