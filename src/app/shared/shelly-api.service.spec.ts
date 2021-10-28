import { TestBed } from '@angular/core/testing';

import { ShellyApiService } from './shelly-api.service';

describe('ShellyApiService', () => {
  let service: ShellyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShellyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
