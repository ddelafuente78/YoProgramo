import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ISkill } from 'src/app/Servicios/Interfaces/ISkills';

@Component({
  selector: 'app-addskill',
  templateUrl: './addskill.component.html',
  styleUrls: ['./addskill.component.css']
})
export class AddskillComponent implements OnInit {

  @Output() onCreateSkill: EventEmitter<ISkill> = new EventEmitter();

  _issoftskill: boolean=false;
  _categoria: string="";
  _nombre: string="";
  _porcentaje: number=0;

  constructor() { }

  ngOnInit(): void {
  }

  agregarSkill(){
    const nuevoSkill =
    {isSoftSkill: this._issoftskill,
     categoria: this._categoria,
     nombre: this._nombre,
     porcentaje: this._porcentaje,
     idPersona: 0};

     this.onCreateSkill.emit(nuevoSkill);
  }
}
