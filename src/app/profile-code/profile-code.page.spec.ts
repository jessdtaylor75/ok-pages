import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileCodePage } from './profile-code.page';

describe('ProfileCodePage', () => {
  let component: ProfileCodePage;
  let fixture: ComponentFixture<ProfileCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
