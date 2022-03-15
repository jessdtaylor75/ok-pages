import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardX2Page } from './card-x2.page';

describe('CardX2Page', () => {
  let component: CardX2Page;
  let fixture: ComponentFixture<CardX2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardX2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardX2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
