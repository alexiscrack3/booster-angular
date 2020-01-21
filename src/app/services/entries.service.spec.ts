import { TestBed } from '@angular/core/testing';

import { EntriesService } from './entries.service';

describe('EntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntriesService = TestBed.get(EntriesService);
    expect(service).toBeTruthy();
  });
});
