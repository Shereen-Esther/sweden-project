import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTaxesComponent } from './local-taxes.component';

describe('LocalTaxesComponent', () => {
  let component: LocalTaxesComponent;
  let fixture: ComponentFixture<LocalTaxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalTaxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
