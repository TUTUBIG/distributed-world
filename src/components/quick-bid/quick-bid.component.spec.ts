import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickBidComponent } from './quick-bid.component';

describe('QuickBidComponent', () => {
  let component: QuickBidComponent;
  let fixture: ComponentFixture<QuickBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickBidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
