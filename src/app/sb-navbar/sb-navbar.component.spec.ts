import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbNavbarComponent } from './sb-navbar.component';

describe('SbNavbarComponent', () => {
  let component: SbNavbarComponent;
  let fixture: ComponentFixture<SbNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
