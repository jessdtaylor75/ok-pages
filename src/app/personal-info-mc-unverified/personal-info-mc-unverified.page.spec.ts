import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInfoMcUnverifiedPage } from './personal-info-mc-unverified.page';

describe('PersonalInfoMcUnverifiedPage', () => {
  let component: PersonalInfoMcUnverifiedPage;
  let fixture: ComponentFixture<PersonalInfoMcUnverifiedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoMcUnverifiedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoMcUnverifiedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
