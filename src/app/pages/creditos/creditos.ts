import { Component } from '@angular/core';
import { Grupos } from '../../components/grupos/grupos';
import { Grupo, TRABAJO } from '../../interface/Grupo';

@Component({
  selector: 'app-creditos',
  imports: [Grupos],
  templateUrl: './creditos.html',
  styleUrl: './creditos.css',
})
export class Creditos {

  grupos:Array<Grupo> = [
    {
      alumnos: [
        {
          nombre: "José Antonio",
          apellidos: "Calderón Pineda",
          esLider:true
        },
        {
          nombre: "José Ángel",
          apellidos: "Casado Chamizo",
          esLider:false
        },
        {
          nombre: "Esteban Ismael",
          apellidos: "Fernández Olid",
          esLider:false
        },
        {
          nombre: "Alejandro",
          apellidos: "López Rodríguez",
          esLider:false
        },
        {
          nombre: "Adrián",
          apellidos: "Zamudio",
          esLider:false
        }
      ],
      logo: "logoEquipoJose.png", // TODO Añadir logo
      trabajo: TRABAJO.CREDITOS
    },


    //logo Juan Carlos es josex 
    
    // TODO Crear el resto de grupos con su respectiva información 
  ]

  
}
