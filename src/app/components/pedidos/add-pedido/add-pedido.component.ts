import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/models/pedido.model';
import { PedidosService } from 'src/services/pedidos.service';

@Component({
  selector: 'app-add-pedido',
  templateUrl: './add-pedido.component.html',
  styleUrls: ['./add-pedido.component.css']
})
export class AddPedidoComponent implements OnInit {

  addPedidoRequest: Pedido = {
    pedidoId: crypto.randomUUID(),
    emailCliente: '',
    nomeCliente: '',
    pago: false,
    valorTotal: 0
  };
  constructor(private pedidosService: PedidosService, private router: Router) { }

  ngOnInit(): void {
  }

  addPedido() {
    this.pedidosService.addPedido(this.addPedidoRequest)
      .subscribe({
        next: (pedido) => {
          this.router.navigate(['pedidos']);
        }
      });
  }

}
