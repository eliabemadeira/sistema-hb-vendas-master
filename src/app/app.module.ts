import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarCadastroComponent } from './componentes/cadastro/criar-cadastro/criar-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListarCadastroComponent } from './componentes/cadastro/listar-cadastro/listar-cadastro.component';
import { ItemCadastradoComponent } from './componentes/cadastro/item-cadastrado/item-cadastrado.component';
import { HttpClientModule } from '@angular/common/http';
import { ExcluirCadastroComponent } from './componentes/cadastro/excluir-cadastro/excluir-cadastro.component';
import { EditarCadastroComponent } from './componentes/cadastro/editar-cadastro/editar-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarCadastroComponent,
    ListarCadastroComponent,
    ItemCadastradoComponent,
    ExcluirCadastroComponent,
    EditarCadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
