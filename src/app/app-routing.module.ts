import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunoComponent } from './aluno/listar-aluno/listar-aluno.component';
import { InserirEditarAlunoComponent } from './aluno/inserir-editar-aluno/inserir-editar-aluno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alunos/listar',
    pathMatch: 'full',
  },
  {
    path: 'alunos',
    redirectTo: 'alunos/listar',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
