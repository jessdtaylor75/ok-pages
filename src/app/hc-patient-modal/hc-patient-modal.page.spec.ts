import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcPatientModalPage } from './hc-patient-modal.page';

describe('HcPatientModalPage', () => {
  let component: HcPatientModalPage;
  let fixture: ComponentFixture<HcPatientModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcPatientModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcPatientModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
