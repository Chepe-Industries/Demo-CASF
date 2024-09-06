import { Routes } from '@angular/router';
import { RutinaIndexComponent } from './rutina/rutina-index/rutina-index.component';
import { PerfilIndexComponent } from './perfil/perfil-index/perfil-index.component';
import { AccesoIndexComponent } from './acceso/acceso-index/acceso-index.component';

export const routes: Routes = [
  { path: 'rutina', component: RutinaIndexComponent },
  { path: 'acceso', component: AccesoIndexComponent },
  { path: 'perfil', component: PerfilIndexComponent },


  { path:'', redirectTo:'/rutina', pathMatch:'full'},
];
