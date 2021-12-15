import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HsbComponent } from './hsb.component';

describe('HsbComponent', () => {
  let component: HsbComponent;
  let fixture: ComponentFixture<HsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HsbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
