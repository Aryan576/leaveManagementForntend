import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveapprovalComponent } from './giveapproval.component';

describe('GiveapprovalComponent', () => {
  let component: GiveapprovalComponent;
  let fixture: ComponentFixture<GiveapprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveapprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
