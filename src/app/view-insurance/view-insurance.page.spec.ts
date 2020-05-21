import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewInsurancePage } from './view-insurance.page';

describe('ViewInsurancePage', () => {
  let component: ViewInsurancePage;
  let fixture: ComponentFixture<ViewInsurancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewInsurancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
