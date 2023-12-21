import { TestBed } from '@angular/core/testing';

import { AdminAsideService } from './admin-aside.service';

describe('AdminAsideService', () => {
  let service: AdminAsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
