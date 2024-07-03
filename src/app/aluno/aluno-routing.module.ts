import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { InserirEditarAlunoComponent } from './inserir-editar-aluno/inserir-editar-aluno.component';
const routes: Routes = [
  {
    path: '',
    component: ListarAlunoComponent,
  },
  {
    path: 'alunos/listar',
    component: ListarAlunoComponent,
  },
  {
    path: 'alunos/novo',
    component: InserirEditarAlunoComponent,
  },
  {
    path: 'alunos/editar/:id',
    component: InserirEditarAlunoComponent,
  },
  {
    path: 'alunos/visualizar/:id',
    component: InserirEditarAlunoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunoRoutingModule {}
