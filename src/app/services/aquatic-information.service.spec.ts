import { TestBed } from '@angular/core/testing';

import { AquaticInformationService } from './aquatic-information.service';

describe('AquaticInformationService', () => {
  let service: AquaticInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AquaticInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
