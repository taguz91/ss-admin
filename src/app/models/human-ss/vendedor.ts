import { Persona } from './persona';
import { Usuario } from './usuario';
export interface Vendedor extends Usuario  {

    vend_max_productos:number;
    
    vend_activo?:boolean;    

}
