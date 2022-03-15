import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeProfileSharePage } from './badge-profile-share.page';

describe('BadgeProfileSharePage', () => {
  let component: BadgeProfileSharePage;
  let fixture: ComponentFixture<BadgeProfileSharePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeProfileSharePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeProfileSharePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
