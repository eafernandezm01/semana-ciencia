import { Routes } from '@angular/router';
import { Juego } from './juego/juego';
import { Creditos } from './pages/creditos/creditos';
import { Funcionamiento } from './pages/funcionamiento/funcionamiento';

export const routes: Routes = [
    {path: 'juego', component: Juego},
    {path: 'creditos', component: Creditos},
    //{path: 'inicio', component: Inicio},
    {path: 'funcionamiento', component:Funcionamiento},
];
