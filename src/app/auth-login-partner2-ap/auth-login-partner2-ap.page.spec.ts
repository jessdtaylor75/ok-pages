import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner2ApPage } from './auth-login-partner2-ap.page';

describe('AuthLoginPartner2ApPage', () => {
  let component: AuthLoginPartner2ApPage;
  let fixture: ComponentFixture<AuthLoginPartner2ApPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginPartner2ApPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginPartner2ApPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
