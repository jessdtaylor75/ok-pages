import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCard1Page } from './view-card1.page';

describe('ViewCard1Page', () => {
  let component: ViewCard1Page;
  let fixture: ComponentFixture<ViewCard1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCard1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCard1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
