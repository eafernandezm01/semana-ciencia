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

  grupos: Array<Grupo> = [
    {
      alumnos: [
        {
          nombre: "José Antonio",
          apellidos: "Calderón Pineda",
          esLider: true
        },
        {
          nombre: "José Ángel",
          apellidos: "Casado Chamizo",
          esLider: false
        },
        {
          nombre: "Esteban Ismael",
          apellidos: "Fernández Olid",
          esLider: false
        },
        {
          nombre: "Alejandro",
          apellidos: "López Rodríguez",
          esLider: false
        },
        {
          nombre: "Adrián",
          apellidos: "Zamudio",
          esLider: false
        }
      ],
      logo: "logoEquipoJose.png", // TODO Añadir logo
      trabajo: TRABAJO.CREDITOS
    },
    {
      alumnos: [
        {
          nombre: "Juan Carlos",
          apellidos: "García Cabrera",
          esLider: true
        },
        {
          nombre: "Steven",
          apellidos: "Araujo Gutiérrez",
          esLider: false
        },
        {
          nombre: "Anaya",
          apellidos: "Vegas Velázquez",
          esLider: false
        },
        {
          nombre: "Jose Diego",
          apellidos: "Sánchez Moro",
          esLider: false
        },
        {
          nombre: "Gabriel",
          apellidos: "Manchado Murillo",
          esLider: false
        }
      ],
      logo: "", // TODO Añadir logo
      trabajo: TRABAJO.CREDITOS
    },
    {
      alumnos: [
        {
          nombre: "Jorge",
          apellidos: "Vaquero Haba",
          esLider: true
        },
        {
          nombre: "Miguel Angel",
          apellidos: "Bahos Roldan",
          esLider: false
        },
        {
          nombre: "David",
          apellidos: "Fruto Olivares",
          esLider: false
        },
        {
          nombre: "Victor",
          apellidos: "Dominguéz Carmona",
          esLider: false
        }
      ],
      logo: "", // TODO Añadir logo
      trabajo: TRABAJO.CREDITOS
    },
    {
      alumnos: [
        {
          nombre: "Carlos",
          apellidos: "Parejo Nieto",
          esLider: true
        },
        {
          nombre: "Emma",
          apellidos: "Donoso Velarde",
          esLider: false
        },
        {
          nombre: "Gonzalo",
          apellidos: "Gómez Sánchez",
          esLider: false
        },
        {
          nombre: "Ismael",
          apellidos: "García Trejo",
          esLider: false
        }
      ],
      logo: "", // TODO Añadir logo
      trabajo: TRABAJO.CREDITOS
    },
    {
      alumnos: [
        {
          nombre: "Natalia",
          apellidos: "Parejo Martins",
          esLider: true
        },
        {
          nombre: "Hector",
          apellidos: "Sanchez Requero",
          esLider: false
        },
        {
          nombre: "Alex",
          apellidos: "Parejo Dorado",
          esLider: false
        },
        {
          nombre: "Marcos Andres",
          apellidos: "Jiménez Rodríguez",
          esLider: false
        },
        {
          nombre: "Raul",
          apellidos: "Carrasco González",
          esLider: false
        }
      ],
      logo: "/home/ciclos/VSCode/OPT/semana-ciencia/semana-ciencia/public/grupoHector.png", // TODO Añadir logo
      trabajo: TRABAJO.CREDITOS
    }


    //logo Juan Carlos es josex 

    // TODO Crear el resto de grupos con su respectiva información 
  ]


}
