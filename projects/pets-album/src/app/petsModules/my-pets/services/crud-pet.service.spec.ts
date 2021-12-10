import { TestBed } from '@angular/core/testing';

import { CrudPetService } from './crud-pet.service';

describe('CrudPetService', () => {
  let service: CrudPetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudPetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
