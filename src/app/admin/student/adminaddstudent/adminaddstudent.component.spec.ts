import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddstudentComponent } from './adminaddstudent.component';

describe('AdminaddstudentComponent', () => {
  let component: AdminaddstudentComponent;
  let fixture: ComponentFixture<AdminaddstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
