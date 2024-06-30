import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursoComponent } from './listar-curso/listar-curso.component';
import { VisualizarInserirEditarCursoComponent } from './visualizar-inserir-editar-curso/visualizar-inserir-editar-curso.component';
import { CursoService } from './services/curso.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [ListarCursoComponent, VisualizarInserirEditarCursoComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [CursoService],
})
export class CursoModule {}
