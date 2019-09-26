import { TestBed } from '@angular/core/testing';

import { AdminVisitasService } from './admin-visitas.service';

describe('AdminVisitasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminVisitasService = TestBed.get(AdminVisitasService);
    expect(service).toBeTruthy();
  });
});
