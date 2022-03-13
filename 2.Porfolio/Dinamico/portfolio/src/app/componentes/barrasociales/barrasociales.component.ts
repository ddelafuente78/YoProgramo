import { Component, OnInit } from '@angular/core';
import {CargarscriptService} from '../../Servicios/cargarscript.service';

@Component({
  selector: 'app-barrasociales',
  templateUrl: './barrasociales.component.html',
  styleUrls: ['./barrasociales.component.css']
})
export class BarrasocialesComponent implements OnInit {

  constructor(private _CargarScripts: CargarscriptService) {
    _CargarScripts.Carga(['BarraSociales']);
   }

  ngOnInit(): void {
  }

}
