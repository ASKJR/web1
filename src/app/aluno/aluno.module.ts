import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';
import { InserirEditarAlunoComponent } from './inserir-editar-aluno/inserir-editar-aluno.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AlunoRoutingModule } from './aluno-routing.module';
import { CrudServiceService } from '../service/crud-service.service';
import { Aluno } from '../shared/models/aluno.model';

@NgModule({
  declarations: [ListarAlunoComponent, InserirEditarAlunoComponent],
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
    SweetAlert2Module.forChild(),
  ],
  providers: [
    {
      provide: CrudServiceService<Aluno>,
      useFactory: () => {
        const service = new CrudServiceService<Aluno>();
        service.configurar('alunos');
        return service;
      },
    },
  ],
})
export class AlunoModule {}
