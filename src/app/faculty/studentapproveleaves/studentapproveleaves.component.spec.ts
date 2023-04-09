import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentapproveleavesComponent } from './studentapproveleaves.component';

describe('StudentapproveleavesComponent', () => {
  let component: StudentapproveleavesComponent;
  let fixture: ComponentFixture<StudentapproveleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentapproveleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentapproveleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
