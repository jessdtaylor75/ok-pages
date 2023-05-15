import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuyNowSuccessPage } from './buy-now-success.page';

describe('BuyNowSuccessPage', () => {
  let component: BuyNowSuccessPage;
  let fixture: ComponentFixture<BuyNowSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNowSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuyNowSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
