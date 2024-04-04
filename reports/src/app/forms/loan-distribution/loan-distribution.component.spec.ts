import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDistributionComponent } from './loan-distribution.component';

describe('LoanDistributionComponent', () => {
  let component: LoanDistributionComponent;
  let fixture: ComponentFixture<LoanDistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanDistributionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoanDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
