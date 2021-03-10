import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcVaccineScreenerPage } from './hc-vaccine-screener.page';

describe('HcVaccineScreenerPage', () => {
  let component: HcVaccineScreenerPage;
  let fixture: ComponentFixture<HcVaccineScreenerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcVaccineScreenerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcVaccineScreenerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
