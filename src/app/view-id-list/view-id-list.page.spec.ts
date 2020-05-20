import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewIdListPage } from './view-id-list.page';

describe('ViewIdListPage', () => {
  let component: ViewIdListPage;
  let fixture: ComponentFixture<ViewIdListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIdListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIdListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
