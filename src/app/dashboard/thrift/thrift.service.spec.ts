import { TestBed } from '@angular/core/testing';

import { ThriftService } from './thrift.service';

describe('ThriftService', () => {
  let service: ThriftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThriftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
