import { TestBed, inject } from '@angular/core/testing';

import { PhrasesService } from './phrases.service';

describe('PhrasesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhrasesService]
    });
  });

  it('should be created', inject([PhrasesService], (service: PhrasesService) => {
    expect(service).toBeTruthy();
  }));
});
