import { TestBed } from '@angular/core/testing';

import { DSRServiceService } from './dsrservice.service';

describe('DSRServiceService', () => {
  let service: DSRServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DSRServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
