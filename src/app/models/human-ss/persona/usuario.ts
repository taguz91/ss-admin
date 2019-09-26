import { Persona } from './persona';
export interface Usuario{

    id_usuario:number;

    persona: Persona;
    
    user_nick:string;

    user_pass:string;

}