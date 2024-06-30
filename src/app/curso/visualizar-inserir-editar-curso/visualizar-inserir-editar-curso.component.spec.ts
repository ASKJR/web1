import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarInserirEditarCursoComponent } from './visualizar-inserir-editar-curso.component';

describe('VisualizarInserirEditarCursoComponent', () => {
  let component: VisualizarInserirEditarCursoComponent;
  let fixture: ComponentFixture<VisualizarInserirEditarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarInserirEditarCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarInserirEditarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
