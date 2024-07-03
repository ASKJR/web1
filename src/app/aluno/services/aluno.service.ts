import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/models/aluno.model';

const LS_CHAVE = 'alunos';
@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  constructor() {}
  listarTodos(): Aluno[] {
    const alunos = localStorage[LS_CHAVE];
    return alunos ? JSON.parse(alunos) : [];
  }

  inserir(aluno: Aluno) {
    const alunos = this.listarTodos();
    aluno.id = new Date().getTime();
    alunos.push(aluno);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }

  buscarPorId(id: number): Aluno | undefined {
    return this.listarTodos().find((p) => p.id === id);
  }

  atualizar(aluno: Aluno): void {
    const alunos = this.listarTodos();
    const index = alunos.findIndex((p) => p.id === aluno.id);
    if (index !== -1) {
      alunos[index] = aluno;
      localStorage[LS_CHAVE] = JSON.stringify(alunos);
    }
  }

  remover(id: number): void {
    const alunos = this.listarTodos().filter((p) => p.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(alunos);
  }
}
