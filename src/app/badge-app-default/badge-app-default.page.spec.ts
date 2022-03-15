import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeAppDefaultPage } from './badge-app-default.page';

describe('BadgeAppDefaultPage', () => {
  let component: BadgeAppDefaultPage;
  let fixture: ComponentFixture<BadgeAppDefaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeAppDefaultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeAppDefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
