import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAssessmentComponent } from './tax-assessment.component';

describe('TaxAssessmentComponent', () => {
  let component: TaxAssessmentComponent;
  let fixture: ComponentFixture<TaxAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
