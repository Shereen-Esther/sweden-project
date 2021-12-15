import { TestBed } from '@angular/core/testing';

import { HsbService } from './hsb.service';

describe('HsbService', () => {
  let service: HsbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
