import { Routes } from '@angular/router';
import { ListarCursoComponent } from '../../curso/listar-curso/listar-curso.component';
import { VisualizarInserirEditarCursoComponent } from '../../curso/visualizar-inserir-editar-curso/visualizar-inserir-editar-curso.component';
export const cursoRoutes: Routes = [
  {
    path: 'cursos',
    redirectTo: 'cursos/listar',
  },
  {
    path: 'cursos/listar',
    component: ListarCursoComponent,
  },
  {
    path: 'cursos/novo',
    component: VisualizarInserirEditarCursoComponent,
  },
  {
    path: 'cursos/editar/:id',
    component: VisualizarInserirEditarCursoComponent,
  },
  {
    path: 'cursos/visualizar/:id',
    component: VisualizarInserirEditarCursoComponent,
  },
];
