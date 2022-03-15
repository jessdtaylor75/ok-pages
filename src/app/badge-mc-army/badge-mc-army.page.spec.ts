import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BadgeMcArmyPage } from './badge-mc-army.page';

describe('BadgeMcArmyPage', () => {
  let component: BadgeMcArmyPage;
  let fixture: ComponentFixture<BadgeMcArmyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeMcArmyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BadgeMcArmyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
