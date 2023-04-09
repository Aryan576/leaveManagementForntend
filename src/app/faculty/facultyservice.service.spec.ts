import { TestBed } from '@angular/core/testing';

import { FacultyserviceService } from './facultyservice.service';

describe('FacultyserviceService', () => {
  let service: FacultyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
