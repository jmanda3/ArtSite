import { TestBed } from '@angular/core/testing';

import { ArtService } from './art.service';

describe('ArtServiceService', () => {
  let service: ArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
