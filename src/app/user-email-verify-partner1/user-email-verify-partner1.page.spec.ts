import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEmailVerifyPartner1Page } from './user-email-verify-partner1.page';

describe('UserEmailVerifyPartner1Page', () => {
  let component: UserEmailVerifyPartner1Page;
  let fixture: ComponentFixture<UserEmailVerifyPartner1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmailVerifyPartner1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserEmailVerifyPartner1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
