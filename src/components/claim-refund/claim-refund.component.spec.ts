import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRefundComponent } from './claim-refund.component';

describe('ClaimRefundComponent', () => {
  let component: ClaimRefundComponent;
  let fixture: ComponentFixture<ClaimRefundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimRefundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
