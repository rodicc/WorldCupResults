import { TestBed, inject } from '@angular/core/testing';

import { MatchViewService } from './match-view.service';

describe('MatchViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchViewService]
    });
  });

  it('should be created', inject([MatchViewService], (service: MatchViewService) => {
    expect(service).toBeTruthy();
  }));
});
