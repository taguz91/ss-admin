import { TestBed } from '@angular/core/testing';

import { ClienteVisitasService } from './cliente-visitas.service';

describe('ClienteVisitasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClienteVisitasService = TestBed.get(ClienteVisitasService);
    expect(service).toBeTruthy();
  });
});
