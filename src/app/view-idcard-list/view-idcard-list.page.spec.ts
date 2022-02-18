import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewIdcardListPage } from './view-idcard-list.page';

describe('ViewIdcardListPage', () => {
  let component: ViewIdcardListPage;
  let fixture: ComponentFixture<ViewIdcardListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIdcardListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIdcardListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
