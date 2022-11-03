import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/models/pedido.model';
import { PedidosService } from 'src/services/pedidos.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.css']
})
export class PedidosListComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) { }

  ngOnInit(): void {

    this.pedidosService.obterListaPedidos().subscribe({
      next: (pedidosFromApi) => {
        this.pedidos = pedidosFromApi
      },
      error: (response) => {
        console.log(response)
      }
    });
  }

}
