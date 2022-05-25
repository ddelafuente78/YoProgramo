import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private autenticacionservice: AutenticacionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    var currentuser = this.autenticacionservice.usuarioAutenticado;
    if(currentuser && currentuser.accessToken){
      req=req.clone({
        setHeaders:{
          Authorization: `Bearer ${currentuser.accessToken}`
        }
      }
      )
    }
    return next.handle(req)
  }
}
