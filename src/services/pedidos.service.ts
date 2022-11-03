import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from 'src/models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  obterListaPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.baseApiUrl + '/api/Pedidos')
  }

  addPedido(addPedidoRequest: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.baseApiUrl + '/api/Pedidos', addPedidoRequest)
  }

  obterPedido(id: string): Observable<Pedido> {
    return this.http.get<Pedido>(this.baseApiUrl + '/api/Pedidos/' + id);
  }

  atualizarPedido(id: string, updatePedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(this.baseApiUrl + '/api/Pedidos/' + id, updatePedido)
  }

  deletarPedido(id: string): Observable<Pedido> {
    return this.http.delete<Pedido>(this.baseApiUrl + '/api/Pedidos/' + id);
  }

}
