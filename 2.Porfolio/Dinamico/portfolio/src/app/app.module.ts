import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Servicios
import {CargarscriptService} from './Servicios/cargarscript.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { DonutchartComponent } from './componentes/donutchart/donutchart.component';
import { BarrasocialesComponent } from './componentes/barrasociales/barrasociales.component';
import { AddExperienciaComponent } from './componentes/add-experiencia/add-experiencia.component';
import { AddEducacionComponent } from './componentes/add-educacion/add-educacion.component';
import { AddProyectoComponent } from './componentes/add-proyecto/add-proyecto.component';
import { AddskillComponent } from './componentes/addskill/addskill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component'
import { InterceptorService } from './Servicios/interceptor.service';
import { FooterComponent } from './componentes/footer/footer.component';

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
    AddExperienciaComponent,
    AddEducacionComponent,
    AddProyectoComponent,
    AddskillComponent,
    LoginComponent,
    PrincipalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [
    CargarscriptService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
