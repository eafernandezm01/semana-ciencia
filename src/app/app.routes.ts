import { Routes } from '@angular/router';
import { Juego } from './juego/juego';
import { Inicio } from './inicio/inicio';
import { Funcionamiento } from './funcionamiento/funcionamiento';

export const routes: Routes = [
    {path: 'juego', component: Juego},
    {path: 'inicio', component: Inicio},
    {path: 'funcionamiento', component: Funcionamiento},
];
