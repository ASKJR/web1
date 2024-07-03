import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Aluno } from '../../shared/models/aluno.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudServiceService } from '../../service/crud-service.service';
import { cpf } from 'cpf-cnpj-validator';

@Component({
  selector: 'app-inserir-editar-aluno',
  templateUrl: './inserir-editar-aluno.component.html',
  styleUrl: './inserir-editar-aluno.component.css',
})
export class InserirEditarAlunoComponent {
  @ViewChild('formAluno') formAluno!: NgForm;
  aluno: Aluno = new Aluno();
  alunos: Aluno[] = [];
  isEdit: boolean = false;
  isViewMode: boolean = false;
  isCpfValid: boolean = false;
  isCpfDuplicated: boolean = false;

  constructor(
    private alunoService: CrudServiceService<Aluno>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.alunos = alunoService.listarTodos();
  }
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    if (idParam) {
      if (this.router.url.includes('visualizar')) {
        this.isViewMode = true;
      } else {
        this.isEdit = true;
      }
      const fetchedAluno = this.alunoService.buscarPorId(+idParam);

      if (fetchedAluno !== undefined) {
        this.aluno = fetchedAluno;
      } else {
        throw new Error('Aluno não encontrada: id=' + idParam);
      }
    } else {
      this.isEdit = false;
      this.isViewMode = false;
    }
  }

  onCpfChange() {
    this.isCpfValid = cpf.isValid(this.aluno.cpf!);
    this.isCpfDuplicated =
      this.alunos.filter((a) => a.cpf === cpf.format(this.aluno.cpf!)).length >
      0;
  }

  handleClik(): void {
    if (this.isEdit) {
      this.editar();
    } else {
      this.inserir();
    }
  }

  inserir(): void {
    if (this.formAluno.form.valid && this.isCpfValid && !this.isCpfDuplicated) {
      this.aluno.cpf = cpf.format(this.aluno.cpf!);
      this.alunoService.inserir(this.aluno);
      this.router.navigate(['/alunos']);
    }
  }
  editar(): void {
    if (this.formAluno.valid && this.isCpfValid) {
      this.aluno.cpf = cpf.format(this.aluno.cpf!);
      this.alunoService.atualizar(this.aluno);
      this.router.navigate(['/alunos']);
    }
  }
}
