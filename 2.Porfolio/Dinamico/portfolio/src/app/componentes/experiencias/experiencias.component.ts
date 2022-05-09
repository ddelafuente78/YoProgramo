import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  @Input() exp_modo: string = 'ver';

  constructor() { }

  ngOnInit(): void { 
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

borrarExperiencia(){
  alert("borrar experiencia");
}
actualizarExperiencia(){
  alert("actualizar experiencia");
  this.ocultarmodal();
}
}
