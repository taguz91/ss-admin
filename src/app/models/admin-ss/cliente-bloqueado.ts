export interface ClienteBloqueado {
    id_cliente_bloqueado: number;
    id_cliente: any;
    clbl_fecha_bloqueo: Date;
    clbl_motivo_bloqueo: string;
    clbl_activo: boolean;
}
