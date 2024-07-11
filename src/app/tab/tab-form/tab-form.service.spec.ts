import { TestBed } from '@angular/core/testing';

import { TabFormService } from './tab-form.service';

describe('TabFormService', () => {
  let service: TabFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
