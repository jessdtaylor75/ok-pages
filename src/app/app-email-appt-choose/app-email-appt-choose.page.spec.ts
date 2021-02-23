import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppEmailApptChoosePage } from './app-email-appt-choose.page';

describe('AppEmailApptChoosePage', () => {
  let component: AppEmailApptChoosePage;
  let fixture: ComponentFixture<AppEmailApptChoosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmailApptChoosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppEmailApptChoosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
