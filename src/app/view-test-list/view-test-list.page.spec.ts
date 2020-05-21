import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTestListPage } from './view-test-list.page';

describe('ViewTestListPage', () => {
  let component: ViewTestListPage;
  let fixture: ComponentFixture<ViewTestListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTestListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTestListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
