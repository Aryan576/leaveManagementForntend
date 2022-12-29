import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedleaveComponent } from './rejectedleave.component';

describe('RejectedleaveComponent', () => {
  let component: RejectedleaveComponent;
  let fixture: ComponentFixture<RejectedleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedleaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
