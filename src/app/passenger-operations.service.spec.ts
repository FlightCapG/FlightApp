import { TestBed } from '@angular/core/testing';

import { PassengerOperationsService } from './passenger-operations.service';

describe('PassengerOperationsService', () => {
  let service: PassengerOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
