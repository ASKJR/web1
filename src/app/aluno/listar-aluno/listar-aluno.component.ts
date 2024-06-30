import { Component } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../../shared/models/aluno.model';
import Swal, { SweetAlertOptions } from 'sweetalert2';
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
  filtrarAlunos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filtroParaNome = input.value;
    if (filtroParaNome === '') {
      this.alunos = this.listarTodos();
    } else {
      this.alunos = this.listarTodos().filter((aluno) =>
        aluno.nome?.toLocaleLowerCase()?.includes(filtroParaNome.toLowerCase())
      );
    }
  }
  removerAluno(aluno: Aluno) {
    this.alunoService.remover(aluno.id!);
    Swal.fire({
      title: 'Removido!',
      text: 'O aluno selecionando foi removido da base de dados.',
      icon: 'success',
    });
    this.alunos = this.alunoService.listarTodos();
  }

  alertaCofirmaRemoverAluno(nomeAluno: string): SweetAlertOptions {
    return {
      title: `Você realmente deseja deletar o aluno ${nomeAluno}?`,
      text: 'Não será possível reverter essa ação.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!',
    };
  }
}
