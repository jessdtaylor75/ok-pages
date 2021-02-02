import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcClinicalScannerPatientPage } from './hc-clinical-scanner-patient.page';

describe('HcClinicalScannerPatientPage', () => {
  let component: HcClinicalScannerPatientPage;
  let fixture: ComponentFixture<HcClinicalScannerPatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcClinicalScannerPatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcClinicalScannerPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
