import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInfoUnverifiedPage } from './personal-info-unverified.page';

describe('PersonalInfoUnverifiedPage', () => {
  let component: PersonalInfoUnverifiedPage;
  let fixture: ComponentFixture<PersonalInfoUnverifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoUnverifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoUnverifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
