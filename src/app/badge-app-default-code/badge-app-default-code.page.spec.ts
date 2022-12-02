import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeAppDefaultCodePage } from './badge-app-default-code.page';

describe('BadgeAppDefaultCodePage', () => {
  let component: BadgeAppDefaultCodePage;
  let fixture: ComponentFixture<BadgeAppDefaultCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeAppDefaultCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeAppDefaultCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
