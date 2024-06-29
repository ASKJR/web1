import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../../shared/models/aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrl: './listar-aluno.component.css',
})
export class ListarAlunoComponent {
  constructor(private alunoService: AlunoService) {}
  alunos: Aluno[] = [];
  ngOnInit(): void {
    this.alunos = this.listarTodos();
  }
  listarTodos(): Aluno[] {
    return this.alunoService.listarTodos();
  }
  removerAluno($event: any, aluno: Aluno) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a aluno ${aluno.nome}?`)) {
      this.alunoService.remover(aluno.id!);
      this.alunos = this.alunoService.listarTodos();
    }
  }
}
