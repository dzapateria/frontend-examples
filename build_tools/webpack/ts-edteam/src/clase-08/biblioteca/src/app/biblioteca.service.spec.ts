import { TestBed, inject } from '@angular/core/testing';

import { BibliotecaService } from './biblioteca.service';

describe('BibliotecaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliotecaService]
    });
  });

  it('should be created', inject([BibliotecaService], (service: BibliotecaService) => {
    expect(service).toBeTruthy();
  }));
});
