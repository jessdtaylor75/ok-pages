import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginAuthSafetypassPage } from './login-auth-safetypass.page';

describe('LoginAuthSafetypassPage', () => {
  let component: LoginAuthSafetypassPage;
  let fixture: ComponentFixture<LoginAuthSafetypassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuthSafetypassPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginAuthSafetypassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
