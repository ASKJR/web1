import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
import { AlunoService } from '../services/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-editar-aluno',
  templateUrl: './inserir-editar-aluno.component.html',
  styleUrl: './inserir-editar-aluno.component.css',
})
export class InserirEditarAlunoComponent {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();
  isEdit: boolean = false;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      this.isEdit = true;
      const fetchedAluno = this.alunoService.buscarPorId(+idParam);

      if (fetchedAluno !== undefined) {
        this.aluno = fetchedAluno;
      } else {
        throw new Error('Aluno não encontrada: id=' + idParam);
      }
    } else {
      this.isEdit = false;
    }
  }
  handleClik(): void {
    if (this.isEdit) {
      this.editar();
    } else {
      this.inserir();
    }
  }
  inserir(): void {
    if (this.formAluno.form.valid) {
      this.alunoService.inserir(this.aluno);
      this.router.navigate(['/alunos']);
    }
  }
  editar(): void {
    if (this.formAluno.valid) {
      this.alunoService.atualizar(this.aluno);
      this.router.navigate(['/alunos']);
    }
  }
}
