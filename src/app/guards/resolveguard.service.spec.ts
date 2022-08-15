import { TestBed } from '@angular/core/testing';

import { ResolveguardService } from './resolveguard.service';

describe('ResolveguardService', () => {
  let service: ResolveguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
