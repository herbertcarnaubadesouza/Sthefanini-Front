import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/models/pedido.model';
import { PedidosService } from 'src/services/pedidos.service';

@Component({
  selector: 'app-edit-pedido',
  templateUrl: './edit-pedido.component.html',
  styleUrls: ['./edit-pedido.component.css']
})
export class EditPedidoComponent implements OnInit {

  pedidoDetails: Pedido = {
    pedidoId: crypto.randomUUID(),
    emailCliente: '',
    nomeCliente: '',
    pago: false,
    valorTotal: 0
  };
  constructor(private route: ActivatedRoute, private pedidosService: PedidosService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('pedidoId');

        if (id) {
          this.pedidosService.obterPedido(id)
            .subscribe({
              next: (response) => {
                this.pedidoDetails = response;
              }
            })
        }
      }
    })
  }

  updateEmployee() {
    this.pedidosService.atualizarPedido(this.pedidoDetails.pedidoId, this.pedidoDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(["pedidos"]);

        }
      })
  }

  deletarPedido(id: string) {
    this.pedidosService.deletarPedido(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(["pedidos"]);
        }
      })
  }

}
