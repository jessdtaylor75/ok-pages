import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserEmailGetAppPage } from './user-email-get-app.page';

describe('UserEmailGetAppPage', () => {
  let component: UserEmailGetAppPage;
  let fixture: ComponentFixture<UserEmailGetAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEmailGetAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserEmailGetAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
