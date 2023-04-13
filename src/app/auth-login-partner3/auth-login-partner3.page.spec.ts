import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthLoginPartner3Page } from './auth-login-partner3.page';

describe('AuthLoginPartner3Page', () => {
  let component: AuthLoginPartner3Page;
  let fixture: ComponentFixture<AuthLoginPartner3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthLoginPartner3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthLoginPartner3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
