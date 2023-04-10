import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthLoginBrandPage } from './auth-login-brand.page';

describe('AuthLoginBrandPage', () => {
  let component: AuthLoginBrandPage;
  let fixture: ComponentFixture<AuthLoginBrandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginBrandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginBrandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
