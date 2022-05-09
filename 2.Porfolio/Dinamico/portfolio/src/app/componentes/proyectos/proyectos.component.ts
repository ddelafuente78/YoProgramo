import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  @Input() proy_modo: string = 'ver';

  constructor() { }

  ngOnInit(): void {
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

  borrarProyecto(){
    alert("borrar Proyecto");
  }

  actualizarProyecto(){
    alert("Actualizar Proyecto");
    this.ocultarmodal();
  }
}
