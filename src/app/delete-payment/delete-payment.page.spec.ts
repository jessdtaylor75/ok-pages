import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletePaymentPage } from './delete-payment.page';

describe('DeletePaymentPage', () => {
  let component: DeletePaymentPage;
  let fixture: ComponentFixture<DeletePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
