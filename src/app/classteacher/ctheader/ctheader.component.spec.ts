import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtheaderComponent } from './ctheader.component';

describe('CtheaderComponent', () => {
  let component: CtheaderComponent;
  let fixture: ComponentFixture<CtheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
