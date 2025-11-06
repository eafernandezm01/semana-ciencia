import { Alumno } from "./Alumno";

export interface Grupo {
    alumnos:Array<Alumno>;
    trabajo:TRABAJO;
    logo:string;
}

export enum TRABAJO {
    HEADER="Cabecera",
    FOOTER="Pie de página",
    NAVBAR="Barra de navegación",
    INICIO="Landing page",
    COMO_FUNCIONA="¿Cómo funciona el juego?",
    CREDITOS="Créditos"
}