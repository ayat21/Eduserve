import { TestBed } from '@angular/core/testing';

import { CourseEditGuard } from './course-edit.guard';

describe('CourseEditGuard', () => {
  let guard: CourseEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CourseEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
