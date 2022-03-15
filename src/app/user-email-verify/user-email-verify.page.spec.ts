import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEmailVerifyPage } from './user-email-verify.page';

describe('UserEmailVerifyPage', () => {
  let component: UserEmailVerifyPage;
  let fixture: ComponentFixture<UserEmailVerifyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmailVerifyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserEmailVerifyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
