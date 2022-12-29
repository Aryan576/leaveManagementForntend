import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StusidebarComponent } from './stusidebar.component';

describe('StusidebarComponent', () => {
  let component: StusidebarComponent;
  let fixture: ComponentFixture<StusidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StusidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StusidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
