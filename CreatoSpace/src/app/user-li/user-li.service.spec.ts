import { TestBed } from '@angular/core/testing';

import { UserLiService } from './user-li.service';

describe('UserLiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLiService = TestBed.get(UserLiService);
    expect(service).toBeTruthy();
  });
});
