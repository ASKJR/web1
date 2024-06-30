import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { alunoRoutes } from './shared/routes/aluno.route';
import { cursoRoutes } from './shared/routes/curso.route';

const routes: Routes = [...alunoRoutes, ...cursoRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
