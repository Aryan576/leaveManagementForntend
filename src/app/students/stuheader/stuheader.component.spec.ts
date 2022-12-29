import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuheaderComponent } from './stuheader.component';

describe('StuheaderComponent', () => {
  let component: StuheaderComponent;
  let fixture: ComponentFixture<StuheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StuheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
