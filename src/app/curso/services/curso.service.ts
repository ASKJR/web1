import { Injectable } from '@angular/core';
import { Curso } from '../../shared/models/curso.model';
const LS_CHAVE = 'cursos';
@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor() {}
  listarTodos(): Curso[] {
    const cursos = localStorage[LS_CHAVE];
    return cursos ? JSON.parse(cursos) : [];
  }

  inserir(curso: Curso) {
    const cursos = this.listarTodos();
    curso.id = new Date().getTime();
    cursos.push(curso);
    localStorage[LS_CHAVE] = JSON.stringify(cursos);
  }

  buscarPorId(id: number): Curso | undefined {
    console.log(id);
    return this.listarTodos().find((p) => p.id === id);
  }

  atualizar(curso: Curso): void {
    const cursos = this.listarTodos();
    const index = cursos.findIndex((p) => p.id === curso.id);
    if (index !== -1) {
      cursos[index] = curso;
      localStorage[LS_CHAVE] = JSON.stringify(cursos);
    }
  }

  remover(id: number): void {
    const cursos = this.listarTodos().filter((p) => p.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cursos);
  }
}
