import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyNowIapPage } from './buy-now-iap.page';

describe('BuyNowIapPage', () => {
  let component: BuyNowIapPage;
  let fixture: ComponentFixture<BuyNowIapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNowIapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyNowIapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
