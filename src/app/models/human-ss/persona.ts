import { TipoIdentificacion } from './tipoIdentificacion';
export interface Persona {

    id_persona:number;

    per_identificacion:string;

    tipoIdentificacion:TipoIdentificacion;

    per_primer_nombre:string;

    per_segundo_nombre:string;

    per_primer_apellido:string;

    per_segundo_apellido:string;

    per_correo:string;

    per_sexo:string;

    per_fecha_registro?:Date;

    per_activo?:boolean;



}