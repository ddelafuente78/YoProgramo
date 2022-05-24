import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SkillsService } from 'src/app/Servicios/skills.service';
import { ISkill } from 'src/app/Servicios/Interfaces/ISkills';
import { DonutchartComponent } from '../donutchart/donutchart.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {

  @ViewChild('skill') skill!: DonutchartComponent;
  
  @Input() skill_modo : string = 'ver';
  @Input() idPersona: number=0;

  modocreacion=false;
  opeAct: boolean=true;

  _idskill: number=0;
  _issoftskill: boolean=false;
  _categoria: string="";
  _nombre: string="";
  _porcentaje: number=0;

  softcat: ISkill[] = [];
  hardcat: ISkill[] = [];
  totalskills: ISkill[] = [];
  individualSoftCat:string[]=[];
  individualHardCat:string[]=[];
  labels:string[]=[];
  datos:number[]=[];

  constructor(private SkillsService: SkillsService) { }

  
  private actualizarID: number=0;

  ngOnInit(): void {
    this.SkillsService.getCategorias(true).subscribe(softcat => {this.softcat = softcat ; this.CatSoftIndividuales()});
    this.SkillsService.getCategorias(false).subscribe(hardcat => {this.hardcat = hardcat; this.CatHardIndividuales()});
  }

  CatSoftIndividuales(){
    this.softcat.forEach(c => {
      if(!this.individualSoftCat.includes(c.categoria))
        this.individualSoftCat.push(c.categoria);
      }
    )
  }

  CatHardIndividuales(){
    this.hardcat.forEach(c => {
      if(!this.individualHardCat.includes(c.categoria))
        this.individualHardCat.push(c.categoria);
      }
    )
  }

  getlabelForHardCategories(categoria: string): string[] {
    this.labels = [];
   this.hardcat.filter(c => c.categoria == categoria).forEach( s =>{
    this.labels.push(s.nombre)});
    return this.labels
  }

  getDataForHardCategories(categoria: string): number[]{
    this.datos = [];
    this.hardcat.filter(c => c.categoria == categoria).forEach( s =>{
      this.datos.push(s.porcentaje)});
      return this.datos;
  }

  getlabelForSoftCategories(categoria: string): string[] {
    this.labels = [];
    this.softcat.filter(c => c.categoria == categoria).forEach( s =>{
     this.labels.push(s.nombre)});
     return this.labels
   }

   getDataForSoftCategories(categoria: string): number[]{
    this.datos = [];
    this.softcat.filter(c => c.categoria == categoria).forEach( s =>{
      this.datos.push(s.porcentaje)});
      return this.datos;
  }

  getSoftCat(): ISkill[]{
    return this.softcat;
  }

  divcreacion(){
    if(this.modocreacion==false){
      this.modocreacion=true;
    }else{
      this.modocreacion=false;
    }
  }

  crearskill(skill: ISkill){
    skill.idPersona = this.idPersona;
    this.SkillsService.createSkill(skill).subscribe(rpta => {
      console.log(rpta);
      this.skill.refreshChart();
    });
  }

  mostrarmodal(tipo: boolean){
    this.opeAct = tipo;
    this.totalskills=[];
    this.hardcat.forEach(hs => this.totalskills.push(hs));
    this.softcat.forEach(ss => this.totalskills.push(ss));

    var elemento = document.getElementById("SkillModal");
      if (elemento != null) {
        elemento.style.display = 'block';
     };
  }


  Seleccionar(id?: number){
    this.actualizarID = id==null?0:id; 
  }

  ocultarmodal(){
    var elemento = document.getElementById("SkillModal");
    if (elemento != null) {
      elemento.style.display = 'none';
    }
  }

  public actualizar(){
    if(this.actualizarID!=0){
      const skill: ISkill = {
        id: this.actualizarID,
        isSoftSkill:(<HTMLInputElement>document.getElementById("ski" + this.actualizarID)).checked,
        categoria: (<HTMLInputElement>document.getElementById("cat" + this.actualizarID)).value,
        nombre: (<HTMLInputElement>document.getElementById("nom" + this.actualizarID)).value,
        porcentaje: +(<HTMLInputElement>document.getElementById("por" + this.actualizarID)).value,
        idPersona: this.idPersona
      };
      this.SkillsService.editarSkill(skill).subscribe(data => {
        console.log(data); 
        this.skill.refreshChart();
      });
      this.ocultarmodal();
    }else{
      alert('Seleccionar el registro a actualizar');
    }
  }

  public borrar(){
    if(this.actualizarID!=0){
      this.SkillsService.deleteSkill(this.actualizarID).subscribe(data => {
        console.log(data);
        this.skill.refreshChart();
      });
      this.ocultarmodal();
    }else{
      alert('Seleccionar el registro a borrar');
    }
  }
}
