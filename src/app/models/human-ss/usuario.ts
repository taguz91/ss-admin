import { Persona } from './persona';
export abstract class Usuario{

    id_usuario:number;

    persona: Persona;
    
    user_nick:string;

    user_pass:string;

    user_activo?:boolean;
}