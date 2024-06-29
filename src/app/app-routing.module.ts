import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { alunoRoutes } from './shared/routes/aluno.route';

const routes: Routes = [...alunoRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
