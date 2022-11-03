import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPedidoComponent } from './components/pedidos/add-pedido/add-pedido.component';
import { PedidosListComponent } from './components/pedidos/pedidos-list/pedidos-list.component';
import { EditPedidoComponent } from './components/pedidos/edit-pedido/edit-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosListComponent,
    AddPedidoComponent,
    EditPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
