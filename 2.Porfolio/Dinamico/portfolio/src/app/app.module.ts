import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

//Servicios
import {CargarscriptService} from './Servicios/cargarscript.service';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { DonutchartComponent } from './componentes/donutchart/donutchart.component';
import { BarrasocialesComponent } from './componentes/barrasociales/barrasociales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciasComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    DonutchartComponent,
    BarrasocialesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule
  ],
  providers: [
    CargarscriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
