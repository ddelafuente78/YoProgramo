import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() educ_modo: string = 'ver'; 

  constructor() { }

  ngOnInit(): void {
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

borrarEducacion(){
  alert("borrar educacion");
}

actualizarEducacion(){
  alert("actualizar educacion");
  this.ocultarmodal();
}
}
