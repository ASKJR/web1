import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { InserirEditarAlunoComponent } from './inserir-editar-aluno/inserir-editar-aluno.component';
import { AlunoService } from './services/aluno.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListarAlunoComponent, InserirEditarAlunoComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [AlunoService],
})
export class AlunoModule {}
