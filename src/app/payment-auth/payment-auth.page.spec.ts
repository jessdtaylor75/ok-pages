import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentAuthPage } from './payment-auth.page';

describe('PaymentAuthPage', () => {
  let component: PaymentAuthPage;
  let fixture: ComponentFixture<PaymentAuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentAuthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentAuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
