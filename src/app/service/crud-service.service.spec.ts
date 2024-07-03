import { TestBed } from '@angular/core/testing';

import { CrudServiceService } from './crud-service.service';
import { Curso } from '../shared/models/curso.model';

describe('CrudServiceService', () => {
  let service: CrudServiceService<Curso>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
