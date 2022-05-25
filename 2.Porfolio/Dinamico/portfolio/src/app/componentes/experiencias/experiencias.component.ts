import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ExperienciaService } from 'src/app/Servicios/experiencia.service';
import { IExperiencia } from 'src/app/Servicios/Interfaces/IExperiencia';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {


  @Input() exp_modo: string = 'ver';
  @Input() idPersona: number=0;

  modocreacion=false;
  exp: IExperiencia[]=[];

  _idexp?: number=0;
  _aniodesde: number=0;
  _aniohasta: number=0;
  _empresa: string="";
  _detalle:string="";


  constructor(private experienciaservices: ExperienciaService) { }

  ngOnInit(): void { 
      this.listarExperiencias();
      //setTimeout(() => { this.ngOnInit() }, 1000 * 5)
  }


  listarExperiencias(){
    this.experienciaservices.getExperiencias().subscribe(datosexperiencia => {this.exp = datosexperiencia})
  }

  ocultarmodal(){
    var elemento = document.getElementById("ExpModal");
    if (elemento != null) {
      elemento.style.display = 'none';
    }
  }
  
  mostrarmodal(){
    var elemento = document.getElementById("ExpModal");
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

  crearexperiencia(experiencia: IExperiencia){
    experiencia.idPersona = this.idPersona;
    this.experienciaservices.createExperiencia(experiencia).subscribe((rpta) => {
      console.log(rpta);
      this.ngOnInit();
    });
  }

  borrarExperiencia(id?: number){
    id=id==undefined?0:id;
    this.experienciaservices.deleteExperiencia(id).subscribe((rsta) => {
      console.log(rsta);
      this.ngOnInit();
    });
  }

  seleccionarExperiencia(id?: number){
    id = id==undefined?0:id;
    this.experienciaservices.encontrarExperiencia(id).subscribe(datosexperiencia =>{
      this._idexp = datosexperiencia.id,
      this._aniodesde = datosexperiencia.aniodesde,
      this._aniohasta = datosexperiencia.aniohasta,
      this._empresa = datosexperiencia.empresa,
      this._detalle = datosexperiencia.detalle
    });
      this.mostrarmodal();
  }
  
  actualizarExperiencia(){
    const experiencia = {
      id: this._idexp,
      aniodesde: this._aniodesde,
      aniohasta: this._aniohasta,
      empresa: this._empresa,
      detalle: this._detalle,
      idPersona: this.idPersona
    }
    this.experienciaservices.editarExperiencia(experiencia).subscribe(rpta => {
      console.log(rpta);
      this.ngOnInit();
    })
    this.ocultarmodal();
  }
}
