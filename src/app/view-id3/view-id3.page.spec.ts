import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewId3Page } from './view-id3.page';

describe('ViewId3Page', () => {
  let component: ViewId3Page;
  let fixture: ComponentFixture<ViewId3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewId3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewId3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
