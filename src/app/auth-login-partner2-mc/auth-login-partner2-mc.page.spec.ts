import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner2McPage } from './auth-login-partner2-mc.page';

describe('AuthLoginPartner2McPage', () => {
  let component: AuthLoginPartner2McPage;
  let fixture: ComponentFixture<AuthLoginPartner2McPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginPartner2McPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginPartner2McPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
