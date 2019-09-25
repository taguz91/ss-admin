import { TestBed } from '@angular/core/testing';

import { ProductoVisitasService } from './producto-visitas.service';

describe('ProductoVisitasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoVisitasService = TestBed.get(ProductoVisitasService);
    expect(service).toBeTruthy();
  });
});
