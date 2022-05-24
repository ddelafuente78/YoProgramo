import { Component, OnInit, Input } from '@angular/core';
import { EducacionService } from 'src/app/Servicios/educacion.service';
import { IEducacion } from 'src/app/Servicios/Interfaces/IEducacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() educ_modo: string = 'ver';
  @Input() idPersona: number=0;

  modocreacion=false;
  educ: IEducacion[] = [];

  _idEduc?: number=0;
  _aniodesde: number=0;
  _aniohasta: number=0;
  _institucion: string="";
  _detalle: string="";

  constructor( private educacionservices: EducacionService) { }

  ngOnInit(): void {
    this.educacionservices.getEducaciones().subscribe(datoseducacion => { this.educ = datoseducacion});

  }
  
  ocultarmodal(){
    var elemento = document.getElementById("EducModal");
    if (elemento != null) {
      elemento.style.display = 'none';
    }
  }
  
  mostrarmodal(){
    var elemento = document.getElementById("EducModal");
    if (elemento != null) {
      elemento.style.display = 'block';
    }
  }
  
  divcreacion(){
    if(this.modocreacion==false){
      this.modocreacion=true;
    }else{
      this.modocreacion=false;
    }
  }

  creareducacion(educacion: IEducacion){
    educacion.idPersona = this.idPersona;
    this.educacionservices.createEducacion(educacion).subscribe(rpta => {
      console.log(rpta);
      this.ngOnInit();
    });
  }

borrarEducacion(id?: number){
  id=id==undefined?0:id;
    this.educacionservices.deleteEducacion(id).subscribe(rsta => {
      console.log(rsta);
      this.ngOnInit()
    });
}

actualizarEducacion(){
  const educacion = {
    id: this._idEduc,
    aniodesde: this._aniodesde,
    aniohasta: this._aniohasta,
    institucion: this._institucion,
    detalle: this._detalle,
    idPersona: this.idPersona
  }
  this.educacionservices.editarEducacion(educacion).subscribe(rpta => {
    console.log(rpta);
    this.ngOnInit();
  })
  this.ocultarmodal();
}

seleccionarEducacion(id?: number){
  id = id==undefined?0:id;
  this.educacionservices.encontrarEducacion(id).subscribe(datoseducacion =>{
    this._idEduc = datoseducacion.id,
    this._aniodesde = datoseducacion.aniodesde,
    this._aniohasta = datoseducacion.aniohasta,
    this._institucion = datoseducacion.institucion,
    this._detalle = datoseducacion.detalle
  });
    this.mostrarmodal();
}
}
