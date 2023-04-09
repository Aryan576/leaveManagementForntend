import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentrejectedleavesComponent } from './studentrejectedleaves.component';

describe('StudentrejectedleavesComponent', () => {
  let component: StudentrejectedleavesComponent;
  let fixture: ComponentFixture<StudentrejectedleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentrejectedleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentrejectedleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
