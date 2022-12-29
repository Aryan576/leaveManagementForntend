import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtsidebarComponent } from './ctsidebar.component';

describe('CtsidebarComponent', () => {
  let component: CtsidebarComponent;
  let fixture: ComponentFixture<CtsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
