import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonaService } from 'src/app/Servicios/persona.service';
import { IPersona } from 'src/app/Servicios/IPersona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  modo='ver';
  @Output() modoext = new EventEmitter();
  modovis:string='Editar';

  persona: IPersona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(personas => 
      this.persona = personas);
      console.log(this.persona)
  }


 /* deletePersona(persona: IPersona){
    this.personaService.deletePersona(persona).subscribe(
      pers => this.persona = this.persona.filter(p => p.id !== persona.id)
    );
  }

  editarPersona(persona: IPersona){
    this.personaService.editarPersona(persona).subscribe();
  }
*/

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
    alert("Actualizar Head");
    this.ocultarmodal();
  }
}
