import { TestBed } from '@angular/core/testing';

import { LeadersService } from './leader.service';

describe('LeadersService', () => {
  let service: LeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
