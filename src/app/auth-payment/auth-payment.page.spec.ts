import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthPaymentPage } from './auth-payment.page';

describe('AuthPaymentPage', () => {
  let component: AuthPaymentPage;
  let fixture: ComponentFixture<AuthPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
