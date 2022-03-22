import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthLoginMcPage } from './auth-login-mc.page';

describe('AuthLoginMcPage', () => {
  let component: AuthLoginMcPage;
  let fixture: ComponentFixture<AuthLoginMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
