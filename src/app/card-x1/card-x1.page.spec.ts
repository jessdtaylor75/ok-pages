import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardX1Page } from './card-x1.page';

describe('CardX1Page', () => {
  let component: CardX1Page;
  let fixture: ComponentFixture<CardX1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardX1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardX1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
