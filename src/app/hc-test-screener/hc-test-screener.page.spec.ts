import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcTestScreenerPage } from './hc-test-screener.page';

describe('HcTestScreenerPage', () => {
  let component: HcTestScreenerPage;
  let fixture: ComponentFixture<HcTestScreenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcTestScreenerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcTestScreenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
