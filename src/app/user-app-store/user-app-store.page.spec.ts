import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserAppStorePage } from './user-app-store.page';

describe('UserAppStorePage', () => {
  let component: UserAppStorePage;
  let fixture: ComponentFixture<UserAppStorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAppStorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAppStorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
