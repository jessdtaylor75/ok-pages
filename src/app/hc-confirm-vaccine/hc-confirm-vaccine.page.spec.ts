import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcConfirmVaccinePage } from './hc-confirm-vaccine.page';

describe('HcConfirmVaccinePage', () => {
  let component: HcConfirmVaccinePage;
  let fixture: ComponentFixture<HcConfirmVaccinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcConfirmVaccinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcConfirmVaccinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
