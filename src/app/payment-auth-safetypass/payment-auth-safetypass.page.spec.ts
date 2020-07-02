import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentAuthSafetypassPage } from './payment-auth-safetypass.page';

describe('PaymentAuthSafetypassPage', () => {
  let component: PaymentAuthSafetypassPage;
  let fixture: ComponentFixture<PaymentAuthSafetypassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAuthSafetypassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentAuthSafetypassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
