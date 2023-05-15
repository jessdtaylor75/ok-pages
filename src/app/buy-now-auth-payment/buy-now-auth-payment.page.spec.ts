import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyNowAuthPaymentPage } from './buy-now-auth-payment.page';

describe('BuyNowAuthPaymentPage', () => {
  let component: BuyNowAuthPaymentPage;
  let fixture: ComponentFixture<BuyNowAuthPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNowAuthPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyNowAuthPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
