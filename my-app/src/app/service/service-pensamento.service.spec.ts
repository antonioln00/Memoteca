import { TestBed } from '@angular/core/testing';

import { ServicePensamentoService } from './service-pensamento.service';

describe('ServicePensamentoService', () => {
  let service: ServicePensamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePensamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
