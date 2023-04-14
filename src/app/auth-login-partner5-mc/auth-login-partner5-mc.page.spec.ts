import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner5McPage } from './auth-login-partner5-mc.page';

describe('AuthLoginPartner5McPage', () => {
  let component: AuthLoginPartner5McPage;
  let fixture: ComponentFixture<AuthLoginPartner5McPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginPartner5McPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginPartner5McPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
