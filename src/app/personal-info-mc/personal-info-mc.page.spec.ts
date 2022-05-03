import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonalInfoMcPage } from './personal-info-mc.page';

describe('PersonalInfoMcPage', () => {
  let component: PersonalInfoMcPage;
  let fixture: ComponentFixture<PersonalInfoMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalInfoMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalInfoMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
