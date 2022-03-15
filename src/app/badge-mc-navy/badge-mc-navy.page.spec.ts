import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeMcNavyPage } from './badge-mc-navy.page';

describe('BadgeMcNavyPage', () => {
  let component: BadgeMcNavyPage;
  let fixture: ComponentFixture<BadgeMcNavyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeMcNavyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeMcNavyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
