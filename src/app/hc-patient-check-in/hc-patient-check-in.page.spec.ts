import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcPatientCheckInPage } from './hc-patient-check-in.page';

describe('HcPatientCheckInPage', () => {
  let component: HcPatientCheckInPage;
  let fixture: ComponentFixture<HcPatientCheckInPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcPatientCheckInPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcPatientCheckInPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
