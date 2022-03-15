import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEmailInboxPage } from './user-email-inbox.page';

describe('UserEmailInboxPage', () => {
  let component: UserEmailInboxPage;
  let fixture: ComponentFixture<UserEmailInboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmailInboxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserEmailInboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
