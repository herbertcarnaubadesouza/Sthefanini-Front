import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPedidoComponent } from './components/pedidos/add-pedido/add-pedido.component';
import { EditPedidoComponent } from './components/pedidos/edit-pedido/edit-pedido.component';
import { PedidosListComponent } from './components/pedidos/pedidos-list/pedidos-list.component';

const routes: Routes = [
  {
    path: '',
    component: PedidosListComponent
  },
  {
    path: 'pedidos',
    component: PedidosListComponent
  },
  {
    path: 'pedidos/add',
    component: AddPedidoComponent
  },
  {
    path: 'pedidos/edit/:pedidoId',
    component: EditPedidoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
