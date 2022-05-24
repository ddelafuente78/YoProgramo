import { Component, OnInit, Input } from '@angular/core';
import { IProyecto } from 'src/app/Servicios/Interfaces/IProyecto';
import { ProyectoService } from 'src/app/Servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() pry_modo: string = 'ver';
  @Input() idPersona: number=0;

  modocreacion=false;
  proy: IProyecto[] = [];

  _idProy?: number=0;
  _aniodesde: number=0;
  _aniohasta: number=0;
  _nombre: string="";
  _descripcion: string="";


  constructor(private proyectoservice: ProyectoService) { }

  ngOnInit(): void {
    this.proyectoservice.getProyectos().subscribe(datosproyectos => {this.proy = datosproyectos})
  }

   ocultarmodal(){
    var elemento = document.getElementById("ProyModal");
    if (elemento != null) {
      elemento.style.display = 'none';
    }
  }
  
  mostrarmodal(){
    var elemento = document.getElementById("ProyModal");
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

  crearproyecto(proyecto: IProyecto){
    proyecto.idPersona = this.idPersona;
    this.proyectoservice.createProyecto(proyecto).subscribe(rpta => {
      console.log(rpta);
      this.ngOnInit();});
  }

  borrarProyecto(id?: number){
    id=id==undefined?0:id;
      this.proyectoservice.deleteProyecto(id).subscribe(rsta => {
        console.log(rsta);
        this.ngOnInit();
      });
  }
  

  actualizarProyecto(){
    const proyecto = {
      id: this._idProy,
      aniodesde: this._aniodesde,
      aniohasta: this._aniohasta,
      nombre: this._nombre,
      descripcion: this._descripcion,
      idPersona: this.idPersona
    }
    this.proyectoservice.editarProyecto(proyecto).subscribe(rpta => {
      console.log(rpta);
      this.ngOnInit();})
    this.ocultarmodal();
  }

  seleccionarProyecto(id?: number){
    id = id==undefined?0:id;
    this.proyectoservice.encontrarProyecto(id).subscribe(datosproyecto =>{
      this._idProy = datosproyecto.id,
      this._aniodesde = datosproyecto.aniodesde,
      this._aniohasta = datosproyecto.aniohasta,
      this._nombre = datosproyecto.nombre,
      this._descripcion = datosproyecto.descripcion
    });
      this.mostrarmodal();
  }
}
