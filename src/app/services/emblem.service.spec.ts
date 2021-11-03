import { TestBed } from '@angular/core/testing';

import { EmblemService } from './emblem.service';

describe('EmblemService', () => {
  let service: EmblemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmblemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
