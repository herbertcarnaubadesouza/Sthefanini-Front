export interface Pedido {
    pedidoId: string;
    nomeCliente: string;
    emailCliente: string;
    valorTotal: number;
    pago: boolean;
}