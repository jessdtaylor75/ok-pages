import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VaccineSignupPage } from './vaccine-signup.page';

describe('VaccineSignupPage', () => {
  let component: VaccineSignupPage;
  let fixture: ComponentFixture<VaccineSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaccineSignupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VaccineSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
