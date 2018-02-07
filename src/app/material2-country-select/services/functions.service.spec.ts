import { TestBed, inject } from '@angular/core/testing';

import { FunctionsService } from './functions.service';

describe('FunctionsService', () => {
  let service: FunctionsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunctionsService]
    });

    service = TestBed.get(FunctionsService);
  });

  it('should be created', inject([FunctionsService], (service: FunctionsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a service instance', () => {
    expect(service).toBeDefined();
  });

  
  it('should return country name in english', () => {
    expect(service.getName('ca')).toBe('Canada');
  });
  it('should return country name in french', () => {
    expect(service.getName('us','fr')).toBe('États-Unis d\'Amérique');
  });
  
});



