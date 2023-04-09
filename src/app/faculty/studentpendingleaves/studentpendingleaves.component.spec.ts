import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpendingleavesComponent } from './studentpendingleaves.component';

describe('StudentpendingleavesComponent', () => {
  let component: StudentpendingleavesComponent;
  let fixture: ComponentFixture<StudentpendingleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentpendingleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentpendingleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
