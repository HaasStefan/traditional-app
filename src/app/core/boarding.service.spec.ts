import { TestBed } from '@angular/core/testing';

import { BoardingService } from './boarding.service';

describe('BoardingService', () => {
  let service: BoardingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
