import { TestBed } from '@angular/core/testing';

import { GetUserCredentialsService } from './get-session-data.service';

describe('GetUserCredentialsService', () => {
  let service: GetUserCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
