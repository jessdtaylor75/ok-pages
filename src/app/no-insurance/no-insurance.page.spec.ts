import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoInsurancePage } from './no-insurance.page';

describe('NoInsurancePage', () => {
  let component: NoInsurancePage;
  let fixture: ComponentFixture<NoInsurancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoInsurancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoInsurancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
