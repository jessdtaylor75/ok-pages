import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewId2Page } from './view-id2.page';

describe('ViewId2Page', () => {
  let component: ViewId2Page;
  let fixture: ComponentFixture<ViewId2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewId2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewId2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
