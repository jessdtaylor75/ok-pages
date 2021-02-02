import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcClinicalScannerPage } from './hc-clinical-scanner.page';

describe('HcClinicalScannerPage', () => {
  let component: HcClinicalScannerPage;
  let fixture: ComponentFixture<HcClinicalScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcClinicalScannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcClinicalScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
