import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileHomeMcPage } from './profile-home-mc.page';

describe('ProfileHomeMcPage', () => {
  let component: ProfileHomeMcPage;
  let fixture: ComponentFixture<ProfileHomeMcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHomeMcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileHomeMcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
