import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuleavesComponent } from './stuleaves.component';

describe('StuleavesComponent', () => {
  let component: StuleavesComponent;
  let fixture: ComponentFixture<StuleavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuleavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
