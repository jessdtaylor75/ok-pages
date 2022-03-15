import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeMcDefaultPage } from './badge-mc-default.page';

describe('BadgeMcDefaultPage', () => {
  let component: BadgeMcDefaultPage;
  let fixture: ComponentFixture<BadgeMcDefaultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeMcDefaultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeMcDefaultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
