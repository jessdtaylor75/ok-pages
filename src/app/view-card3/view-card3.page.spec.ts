import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewCard3Page } from './view-card3.page';

describe('ViewCard3Page', () => {
  let component: ViewCard3Page;
  let fixture: ComponentFixture<ViewCard3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCard3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewCard3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
