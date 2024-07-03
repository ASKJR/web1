import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { InserirEditarAlunoComponent } from './inserir-editar-aluno/inserir-editar-aluno.component';
import { AlunoService } from './services/aluno.service';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AlunoRoutingModule } from './aluno-routing.module';

@NgModule({
  declarations: [ListarAlunoComponent, InserirEditarAlunoComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [AlunoService],
})
export class AlunoModule {}
