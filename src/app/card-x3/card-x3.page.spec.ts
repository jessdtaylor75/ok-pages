import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardX3Page } from './card-x3.page';

describe('CardX3Page', () => {
  let component: CardX3Page;
  let fixture: ComponentFixture<CardX3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardX3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardX3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
