import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  title: string = 'ATRAPA LOS QUBITS';
  subtitle: string = 'SEMANA DE LA CIENCIA 25/26 - I.E.S. DONOSO CORTÉS';
  logo: string = 'donoso.jpeg';
}
