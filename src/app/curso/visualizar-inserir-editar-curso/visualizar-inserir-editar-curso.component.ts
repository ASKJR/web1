import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curso } from '../../shared/models/curso.model';
import { CursoService } from '../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visualizar-inserir-editar-curso',
  templateUrl: './visualizar-inserir-editar-curso.component.html',
  styleUrl: './visualizar-inserir-editar-curso.component.css',
})
export class VisualizarInserirEditarCursoComponent {
  @ViewChild('formCurso') formCurso!: NgForm;
  curso: Curso = new Curso();
  isEdit: boolean = false;
  isViewMode: boolean = false;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.activatedRoute.snapshot.params['id'];
    console.log(this.router.url);
    if (idParam) {
      if (this.router.url.includes('visualizar')) {
        this.isViewMode = true;
      } else {
        this.isEdit = true;
      }
      const fetchedCurso = this.cursoService.buscarPorId(+idParam);

      if (fetchedCurso !== undefined) {
        this.curso = fetchedCurso;
      } else {
        throw new Error('Curso não encontrada: id=' + idParam);
      }
    } else {
      this.isEdit = false;
      this.isViewMode = false;
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
    if (this.formCurso.form.valid) {
      this.cursoService.inserir(this.curso);
      this.router.navigate(['/cursos']);
    }
  }
  editar(): void {
    if (this.formCurso.valid) {
      this.cursoService.atualizar(this.curso);
      this.router.navigate(['/cursos']);
    }
  }
}
