import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { IPersona } from 'src/app/Servicios/Interfaces/IPersona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public p: IPersona = {bannerimg:"", foto:"", nombre:"", apellido:"", acercade:""};
  _id?:number=0;
  _bannerimg:string='';
  _foto:string='';
  _nombre:string='';
  _apellido:string='';
  _acercade:string='';
  modo='ver';
  @Output() modoext = new EventEmitter();
  @Output() idPersona = new EventEmitter();
  modovis:string='Editar';

  constructor(private personaService: PersonaService, private rutas:Router) { }

  ngOnInit() {
    this.p = {bannerimg:"banner.webp", foto:"foto.jpg", nombre:"Nombre", apellido:"Apellido", acercade:"Acerca de..."};
    
    this.personaService.createPersona(this.p).subscribe(rsta => {console.log(rsta);});

    this.personaService.getPersonas().subscribe(datospersona => {
      this._id = datospersona[0].id;
      this._acercade = datospersona[0].acercade;
      this._apellido = datospersona[0].apellido;
      this._bannerimg = datospersona[0].bannerimg;
      this._foto = datospersona[0].foto;
      this._nombre = datospersona[0].nombre;
      this.idPersona.emit(datospersona[0].id);
    });
  }


  // TODO: habilitar en caso que se tenga la opcion de mostrar muchas personas en el sistema
 /* deletePersona(persona: IPersona){
    this.personaService.deletePersona(persona).subscribe(
      pers => this.persona = this.persona.filter(p => p.id !== persona.id)
    );
  }*/

  editarPersona(persona: IPersona){
    this.personaService.editarPersona(persona).subscribe(rsta => console.log(rsta));
  }

  cambiarModo(){
    if(this.modo == 'ver'){
      this.modo='editar';
      this.modovis='ver';
    }else{
      this.modo='ver';
      this.modovis='editar';
    }
    this.modoext.emit(this.modo);
  }

  ocultarmodal(){
    var elemento = document.getElementById("HeadModal");
    if (elemento != null) {
      elemento.style.display = 'none';
    }
  }
  
  mostrarmodal(){
    var elemento = document.getElementById("HeadModal");
    if (elemento != null) {
      elemento.style.display = 'block';
    }
  }

  actualizarHead(){
    this.p = {
      id: this._id,
      bannerimg: this._bannerimg, 
      foto: this._foto, 
      nombre: this._nombre, 
      apellido: this._apellido, 
      acercade:this._acercade 
    };
    this.editarPersona(this.p);
    this.ocultarmodal();
  }

  salir(){
    this.rutas.navigate(['/login']);
  }
}
