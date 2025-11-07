import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Header } from './comun/header/header';
import { Footer } from './comun/footer/footer';
import { Footer } from './comun/footer/footer';
import { Header } from './comun/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Navbar, Header, Footer], //Añadido para que no os falle
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
}
