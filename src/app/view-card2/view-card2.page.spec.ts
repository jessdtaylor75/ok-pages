import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCard2Page } from './view-card2.page';

describe('ViewCard2Page', () => {
  let component: ViewCard2Page;
  let fixture: ComponentFixture<ViewCard2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCard2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCard2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
