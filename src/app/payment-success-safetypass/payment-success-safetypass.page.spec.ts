import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentSuccessSafetypassPage } from './payment-success-safetypass.page';

describe('PaymentSuccessSafetypassPage', () => {
  let component: PaymentSuccessSafetypassPage;
  let fixture: ComponentFixture<PaymentSuccessSafetypassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSuccessSafetypassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentSuccessSafetypassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
