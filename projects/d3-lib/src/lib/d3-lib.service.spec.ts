import { TestBed } from '@angular/core/testing';

import { D3LibService } from './d3-lib.service';

describe('D3LibService', () => {
  let service: D3LibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(D3LibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
