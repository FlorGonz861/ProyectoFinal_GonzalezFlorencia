import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';

import { EditacercaComponent } from './components/acerca-de/editacerca.component';

import { EditproyectoComponent } from './components/proyecto/editproyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto.component';
import { EdithysComponent } from './components/hys/edithys.component';
import { NewhysComponent } from './components/hys/newhys.component';







const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'nuevaproy', component: NewProyectoComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'editace/:id', component: EditacercaComponent},
  { path: 'editproy/:id', component: EditproyectoComponent},
  { path: 'nuevahab', component: EdithysComponent},
  { path: 'edithab/:id', component: NewhysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
