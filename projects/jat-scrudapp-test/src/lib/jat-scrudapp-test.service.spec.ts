import { TestBed } from '@angular/core/testing';

import { JatSCRUDAppTestService } from './jat-scrudapp-test.service';

describe('JatSCRUDAppTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JatSCRUDAppTestService = TestBed.get(JatSCRUDAppTestService);
    expect(service).toBeTruthy();
  });
});
