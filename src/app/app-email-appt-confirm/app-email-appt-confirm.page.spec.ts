import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppEmailApptConfirmPage } from './app-email-appt-confirm.page';

describe('AppEmailApptConfirmPage', () => {
  let component: AppEmailApptConfirmPage;
  let fixture: ComponentFixture<AppEmailApptConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmailApptConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppEmailApptConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
