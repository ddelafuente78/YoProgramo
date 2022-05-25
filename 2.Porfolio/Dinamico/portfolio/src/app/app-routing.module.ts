import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { LoginComponent } from './componentes/login/login.component';
import { GuardGuard } from './Servicios/guard.guard';

const routes: Routes = [
  {path:'principal', component: PrincipalComponent, canActivate:[GuardGuard]},
  {path:'login', component: LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
