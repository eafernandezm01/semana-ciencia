import { Component, Input } from '@angular/core';
import { Grupo } from '../../interface/Grupo';

@Component({
  selector: 'app-grupos',
  imports: [],
  templateUrl: './grupos.html',
  styleUrl: './grupos.css',
})
export class Grupos {

  @Input()
  grupo!:Grupo;
}
