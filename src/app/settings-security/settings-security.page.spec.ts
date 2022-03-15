import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SettingsSecurityPage } from './settings-security.page';

describe('SettingsSecurityPage', () => {
  let component: SettingsSecurityPage;
  let fixture: ComponentFixture<SettingsSecurityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSecurityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsSecurityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
