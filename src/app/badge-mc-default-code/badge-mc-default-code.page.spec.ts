import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeMcDefaultCodePage } from './badge-mc-default-code.page';

describe('BadgeMcDefaultCodePage', () => {
  let component: BadgeMcDefaultCodePage;
  let fixture: ComponentFixture<BadgeMcDefaultCodePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeMcDefaultCodePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeMcDefaultCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
