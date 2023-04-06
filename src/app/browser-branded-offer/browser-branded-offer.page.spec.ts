import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrowserBrandedOfferPage } from './browser-branded-offer.page';

describe('BrowserBrandedOfferPage', () => {
  let component: BrowserBrandedOfferPage;
  let fixture: ComponentFixture<BrowserBrandedOfferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserBrandedOfferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserBrandedOfferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
