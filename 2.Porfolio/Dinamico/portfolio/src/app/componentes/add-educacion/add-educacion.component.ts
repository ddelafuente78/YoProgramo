import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IEducacion } from 'src/app/Servicios/Interfaces/IEducacion';

@Component({
  selector: 'app-add-educacion',
  templateUrl: './add-educacion.component.html',
  styleUrls: ['./add-educacion.component.css']
})
export class AddEducacionComponent implements OnInit {

  @Output() onCreateEducacion: EventEmitter<IEducacion> = new EventEmitter();

  _aniodesde: number=0;
  _aniohasta: number=0;
  _institucion: string="";
  _detalle: string="";

  constructor() { }

  ngOnInit(): void {
  }

  agregarEducacion(){
    const nuevaEducacion =
    {aniodesde: this._aniodesde,
     aniohasta: this._aniohasta,
     institucion: this._institucion,
     detalle: this._detalle,
     idPersona: 0};

     this.onCreateEducacion.emit(nuevaEducacion);
  }

}
