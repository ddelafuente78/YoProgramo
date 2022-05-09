import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'portfolio';
  modo = 'ver';
  persona: any;

  actualizar(m: string){
    this.modo = m;
  }
}
