import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HcVaccineAdminPage } from './hc-vaccine-admin.page';

describe('HcVaccineAdminPage', () => {
  let component: HcVaccineAdminPage;
  let fixture: ComponentFixture<HcVaccineAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcVaccineAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HcVaccineAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
