import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IProyecto } from 'src/app/Servicios/Interfaces/IProyecto';

@Component({
  selector: 'app-add-proyecto',
  templateUrl: './add-proyecto.component.html',
  styleUrls: ['./add-proyecto.component.css']
})
export class AddProyectoComponent implements OnInit {

  @Output() onCreateProyecto: EventEmitter<IProyecto> = new EventEmitter();

  _aniodesde: number= 0;
  _aniohasta: number= 0;
  _nombre: string= "";
  _descripcion: string= "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarProyecto(){
    const nuevoProyecto =
    {aniodesde: this._aniodesde,
     aniohasta: this._aniohasta,
     nombre: this._nombre,
     descripcion: this._descripcion,
     idPersona: 0};

     this.onCreateProyecto.emit(nuevoProyecto);
  }

}
