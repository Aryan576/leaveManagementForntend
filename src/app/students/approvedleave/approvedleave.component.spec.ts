import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedleaveComponent } from './approvedleave.component';

describe('ApprovedleaveComponent', () => {
  let component: ApprovedleaveComponent;
  let fixture: ComponentFixture<ApprovedleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovedleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
