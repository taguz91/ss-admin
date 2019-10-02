import { TestBed } from '@angular/core/testing';

import { RecomendacionService } from './recomendacion.service';

describe('RecomendacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecomendacionService = TestBed.get(RecomendacionService);
    expect(service).toBeTruthy();
  });
});
