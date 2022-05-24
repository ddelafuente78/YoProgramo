import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IExperiencia } from 'src/app/Servicios/Interfaces/IExperiencia';

@Component({
  selector: 'app-add-experiencia',
  templateUrl: './add-experiencia.component.html',
  styleUrls: ['./add-experiencia.component.css']
})

export class AddExperienciaComponent implements OnInit {
  
  @Output() onCreateExperiencia: EventEmitter<IExperiencia> = new EventEmitter();

  _aniodesde: number= 0;
  _aniohasta: number= 0;
  _empresa: string= "";
  _detalle: string= "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarExperiencia(){
    const nuevaExperiencia =
    {aniodesde: this._aniodesde,
     aniohasta: this._aniohasta,
     empresa: this._empresa,
     detalle: this._detalle,
     idPersona: 0};

     this.onCreateExperiencia.emit(nuevaExperiencia);
  }
  
}
