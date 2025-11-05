import { Routes } from '@angular/router';
import { Juego } from './juego/juego';
import { Inicio } from './inicio/inicio';


export const routes: Routes = [
    {path: 'juego', component: Juego},
    {path: 'inicio', component: Inicio}
];
