import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  
  title:string = 'portfolio';
  modo: string = 'ver';
  idPersona: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  actualizar(m: string){
    this.modo = m;
  }

  setIdPersona(p: number){
    this.idPersona = p;
  }
}
