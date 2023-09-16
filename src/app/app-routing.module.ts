import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCadastroComponent } from './componentes/cadastro/criar-cadastro/criar-cadastro.component';
import { ListarCadastroComponent } from './componentes/cadastro/listar-cadastro/listar-cadastro.component';
import { ExcluirCadastroComponent } from './componentes/cadastro/excluir-cadastro/excluir-cadastro.component';
import { EditarCadastroComponent } from './componentes/cadastro/editar-cadastro/editar-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarCadastro',
    pathMatch: 'full'
  },
  {
    path: 'criarCadastro',
    component: CriarCadastroComponent
  },
  {
    path: 'listarCadastro',
    component: ListarCadastroComponent
  },
  {
    path: 'cadastro/excluirCadastro/:id',
    component: ExcluirCadastroComponent
  },
  {
    path: 'cadastro/editarCadastro/:id',
    component: EditarCadastroComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
